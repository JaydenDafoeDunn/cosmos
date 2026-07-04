// Optional webcam hand control (MediaPipe HandLandmarker, loaded on demand
// from CDN only when the user enables it). Palm position steers, pinch =
// thrust, fist = fire. Everything stays on-device.
import { Engine } from './engine';
import { Game } from './game';

export class Hands {
  active = false;
  private video: HTMLVideoElement | null = null;
  private landmarker: any = null;
  private raf = 0;

  constructor(private engine: Engine, private game: Game, private onStatus: (s: string) => void) {}

  async toggle(): Promise<boolean> {
    if (this.active) { this.stop(); return false; }
    try {
      this.onStatus('Loading hand tracking…');
      const vision = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs' as any);
      const files = await vision.FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
      this.landmarker = await vision.HandLandmarker.createFromOptions(files, {
        baseOptions: { modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task' },
        numHands: 1, runningMode: 'VIDEO',
      });
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      this.video = document.createElement('video');
      this.video.srcObject = stream;
      this.video.autoplay = true;
      this.video.className = 'handcam';
      document.body.appendChild(this.video);
      this.active = true;
      this.onStatus('🖐 Hand control ON — move hand to steer, pinch to fly, fist to fire');
      const loop = () => {
        if (!this.active) return;
        if (this.video!.readyState >= 2) {
          const res = this.landmarker.detectForVideo(this.video!, performance.now());
          const lm = res.landmarks?.[0];
          if (lm) {
            const palm = lm[9]; // middle-finger base ≈ palm centre
            // steer toward where the hand points (mirrored)
            this.engine.yaw += (palm.x - 0.5) * -0.06;
            this.engine.pitch = Math.max(-1.5, Math.min(1.5, this.engine.pitch + (palm.y - 0.5) * -0.06));
            const pinch = Math.hypot(lm[4].x - lm[8].x, lm[4].y - lm[8].y);
            if (pinch < 0.06) this.engine.moveForward(0.03);
            // fist: fingertips folded near palm
            const folded = [8, 12, 16, 20].every((i) => Math.hypot(lm[i].x - lm[0].x, lm[i].y - lm[0].y) < 0.22);
            this.game.firing = folded;
          } else this.game.firing = false;
        }
        this.raf = requestAnimationFrame(loop);
      };
      loop();
      return true;
    } catch (e) {
      this.onStatus('Hand tracking unavailable (camera blocked or offline)');
      this.stop();
      return false;
    }
  }

  stop() {
    this.active = false;
    cancelAnimationFrame(this.raf);
    this.game.firing = false;
    if (this.video) {
      (this.video.srcObject as MediaStream | null)?.getTracks().forEach((t) => t.stop());
      this.video.remove();
      this.video = null;
    }
    this.landmarker?.close?.();
    this.landmarker = null;
    this.onStatus('Hand control off');
  }
}
