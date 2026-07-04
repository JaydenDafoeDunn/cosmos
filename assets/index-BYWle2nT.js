(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="166",yc=0,ho=1,Mc=2,Al=1,Sc=2,gn=3,Un=0,Ue=1,Qe=2,Ln=0,Ti=1,xn=2,uo=3,fo=4,Ec=5,Kn=100,bc=101,wc=102,Tc=103,Ac=104,Rc=200,Cc=201,Pc=202,Lc=203,Zr=204,Jr=205,Ic=206,Dc=207,Uc=208,Nc=209,Fc=210,Oc=211,kc=212,Bc=213,zc=214,Hc=0,Gc=1,Vc=2,Xs=3,Wc=4,Xc=5,qc=6,Kc=7,Oa=0,Yc=1,jc=2,In=0,$c=1,Zc=2,Jc=3,Qc=4,th=5,eh=6,nh=7,Rl=300,Pi=301,Li=302,Qr=303,ta=304,rr=306,ea=1e3,jn=1001,na=1002,Ke=1003,ih=1004,as=1005,tn=1006,mr=1007,$n=1008,yn=1009,Cl=1010,Pl=1011,Ji=1012,ka=1013,Jn=1014,_n=1015,ts=1016,Ba=1017,za=1018,Ii=1020,Ll=35902,Il=1021,Dl=1022,nn=1023,Ul=1024,Nl=1025,Ai=1026,Di=1027,Fl=1028,Ha=1029,Ol=1030,Ga=1031,Va=1033,ks=33776,Bs=33777,zs=33778,Hs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,ya=37818,Ma=37819,Sa=37820,Ea=37821,Gs=36492,ba=36494,wa=36495,kl=36283,Ta=36284,Aa=36285,Ra=36286,sh=3200,rh=3201,Wa=0,ah=1,Cn="",qe="srgb",Fn="srgb-linear",Xa="display-p3",ar="display-p3-linear",qs="linear",ie="srgb",Ks="rec709",Ys="p3",ii=7680,po=519,oh=512,lh=513,ch=514,Bl=515,hh=516,uh=517,dh=518,fh=519,Ca=35044,mo="300 es",vn=2e3,js=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,Pa=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function ph(i,t){return(i%t+t)%t}function _r(i,t,e){return(1-e)*i+e*t}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],S=s[1],y=s[4],b=s[7],D=s[2],w=s[5],A=s[8];return r[0]=a*_+o*S+l*D,r[3]=a*m+o*y+l*w,r[6]=a*f+o*b+l*A,r[1]=c*_+h*S+u*D,r[4]=c*m+h*y+u*w,r[7]=c*f+h*b+u*A,r[2]=d*_+p*S+g*D,r[5]=d*m+p*y+g*w,r[8]=d*f+p*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new It;function zl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){const i=Qi("canvas");return i.style.display="block",i}const go={};function qa(i){i in go||(go[i]=!0,console.warn(i))}function gh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const _o=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Fn]:{transfer:qs,primaries:Ks,toReference:i=>i,fromReference:i=>i},[qe]:{transfer:ie,primaries:Ks,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ar]:{transfer:qs,primaries:Ys,toReference:i=>i.applyMatrix3(vo),fromReference:i=>i.applyMatrix3(_o)},[Xa]:{transfer:ie,primaries:Ys,toReference:i=>i.convertSRGBToLinear().applyMatrix3(vo),fromReference:i=>i.applyMatrix3(_o).convertLinearToSRGB()}},_h=new Set([Fn,ar]),jt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_h.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=os[t].toReference,s=os[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return os[i].primaries},getTransfer:function(i){return i===Cn?qs:os[i].transfer}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Qi("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xh=0;class Hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yr(s[a].image)):r.push(yr(s[a]))}else r=yr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ce extends Oi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=jn,s=jn,r=tn,a=$n,o=nn,l=yn,c=Ce.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Dn(),this.name="",this.source=new Hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Rl;Ce.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(p+1)/2,D=(f+1)/2,w=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return y>b&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mh extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Mh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),w=Math.atan2(D,f*S);m=Math.sin(m*w)/D,o=Math.sin(o*w)/D}const b=o*S;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new R,xo=new ti;class es{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),cs.subVectors(this.max,zi),ri.subVectors(t.a,zi),ai.subVectors(t.b,zi),oi.subVectors(t.c,zi),En.subVectors(ai,ri),bn.subVectors(oi,ai),kn.subVectors(ri,oi);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-kn.z,kn.y,En.z,0,-En.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-En.y,En.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!Sr(e,ri,ai,oi,cs)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,ri,ai,oi,cs))?!1:(hs.crossVectors(En,bn),e=[hs.x,hs.y,hs.z],Sr(e,ri,ai,oi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new R,new R,new R,new R,new R,new R,new R,new R],$e=new R,ls=new es,ri=new R,ai=new R,oi=new R,En=new R,bn=new R,kn=new R,zi=new R,cs=new R,hs=new R,Bn=new R;function Sr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bn.fromArray(i,r);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Eh=new es,Hi=new R,Er=new R;class ns{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(Er)),this.expandByPoint(Hi.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new R,br=new R,us=new R,wn=new R,wr=new R,ds=new R,Tr=new R;class Ka{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){br.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(br);const r=t.distanceTo(e)*.5,a=-this.direction.dot(us),o=wn.dot(this.direction),l=-wn.dot(us),c=wn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(br).addScaledVector(us,d),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){wr.subVectors(e,t),ds.subVectors(n,t),Tr.crossVectors(wr,ds);let a=this.direction.dot(Tr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const l=o*this.direction.dot(ds.crossVectors(wn,ds));if(l<0)return null;const c=o*this.direction.dot(wr.cross(wn));if(c<0||l+c>a)return null;const h=-o*wn.dot(Tr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,wh)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Tn.crossVectors(n,Ge),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Tn.crossVectors(n,Ge)),Tn.normalize(),fs.crossVectors(Ge,Tn),s[0]=Tn.x,s[4]=fs.x,s[8]=Ge.x,s[1]=Tn.y,s[5]=fs.y,s[9]=Ge.y,s[2]=Tn.z,s[6]=fs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],y=n[7],b=n[11],D=n[15],w=s[0],A=s[4],I=s[8],E=s[12],v=s[1],P=s[5],z=s[9],k=s[13],V=s[2],q=s[6],G=s[10],Y=s[14],H=s[3],ct=s[7],mt=s[11],gt=s[15];return r[0]=a*w+o*v+l*V+c*H,r[4]=a*A+o*P+l*q+c*ct,r[8]=a*I+o*z+l*G+c*mt,r[12]=a*E+o*k+l*Y+c*gt,r[1]=h*w+u*v+d*V+p*H,r[5]=h*A+u*P+d*q+p*ct,r[9]=h*I+u*z+d*G+p*mt,r[13]=h*E+u*k+d*Y+p*gt,r[2]=g*w+_*v+m*V+f*H,r[6]=g*A+_*P+m*q+f*ct,r[10]=g*I+_*z+m*G+f*mt,r[14]=g*E+_*k+m*Y+f*gt,r[3]=S*w+y*v+b*V+D*H,r[7]=S*A+y*P+b*q+D*ct,r[11]=S*I+y*z+b*G+D*mt,r[15]=S*E+y*k+b*Y+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,D=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=e*S+n*y+s*b+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=S*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=y*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=b*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,S=l*c,y=l*h,b=l*u,D=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+b)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(d+f))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(m-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/r,h=1/a,u=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===js)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(o===vn)g=(a+r)*u,_=-2*u;else if(o===js)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new R,Ze=new te,bh=new R(0,0,0),wh=new R(1,1,1),Tn=new R,fs=new R,Ge=new R,yo=new te,Mo=new ti;class Be{constructor(t=0,e=0,n=0,s=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Th=0;const So=new R,ci=new ti,fn=new te,ps=new R,Gi=new R,Ah=new R,Rh=new ti,Eo=new R(1,0,0),bo=new R(0,1,0),wo=new R(0,0,1),To={type:"added"},Ch={type:"removed"},hi={type:"childadded",child:null},Ar={type:"childremoved",child:null};class xe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new R,e=new Be,n=new ti,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new It}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Eo,t)}rotateY(t){return this.rotateOnAxis(bo,t)}rotateZ(t){return this.rotateOnAxis(wo,t)}translateOnAxis(t,e){return So.copy(t).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eo,t)}translateY(t){return this.translateOnAxis(bo,t)}translateZ(t){return this.translateOnAxis(wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,ps,this.up):fn.lookAt(ps,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(fn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(To),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ch),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(To),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Rh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new R(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new R,pn=new R,Rr=new R,mn=new R,ui=new R,di=new R,Ao=new R,Cr=new R,Pr=new R,Lr=new R;class en{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),pn.subVectors(n,e),Rr.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(pn),l=Je.dot(Rr),c=pn.dot(pn),h=pn.dot(Rr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),pn.subVectors(t,e),Je.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ui.subVectors(s,n),di.subVectors(r,n),Cr.subVectors(t,n);const l=ui.dot(Cr),c=di.dot(Cr);if(l<=0&&c<=0)return e.copy(n);Pr.subVectors(t,s);const h=ui.dot(Pr),u=di.dot(Pr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ui,a);Lr.subVectors(t,r);const p=ui.dot(Lr),g=di.dot(Lr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(di,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ao.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ao,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ph(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ir(a,r,t+1/3),this.g=Ir(a,r,t),this.b=Ir(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Oe(Re.r*255,0,255))*65536+Math.round(Oe(Re.g*255,0,255))*256+Math.round(Oe(Re.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=qe){jt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(ms);const n=_r(An.h,ms.h,e),s=_r(An.s,ms.s,e),r=_r(An.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Ct;Ct.NAMES=Wl;let Ph=0;class Mn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ti,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Te extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new R,gs=new St;class ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),t}}class Xl extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ql extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lh=0;const Xe=new te,Dr=new xe,fi=new R,Ve=new es,Vi=new es,Se=new R;class oe extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zl(t)?ql:Xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ve.min,Vi.min),Ve.expandByPoint(Se),Se.addVectors(Ve.max,Vi.max),Ve.expandByPoint(Se)):(Ve.expandByPoint(Vi.min),Ve.expandByPoint(Vi.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(t,c),Se.add(fi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new R,l[I]=new R;const c=new R,h=new R,u=new R,d=new St,p=new St,g=new St,_=new R,m=new R;function f(I,E,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(_),o[E].add(_),o[v].add(_),l[I].add(m),l[E].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,E=S.length;I<E;++I){const v=S[I],P=v.start,z=v.count;for(let k=P,V=P+z;k<V;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new R,b=new R,D=new R,w=new R;function A(I){D.fromBufferAttribute(s,I),w.copy(D);const E=o[I];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(w,E);const P=b.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,E=S.length;I<E;++I){const v=S[I],P=v.start,z=v.count;for(let k=P,V=P+z;k<V;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new te,zn=new Ka,_s=new ns,Co=new R,pi=new R,mi=new R,gi=new R,Ur=new R,vs=new R,xs=new St,ys=new St,Ms=new St,Po=new R,Lo=new R,Io=new R,Ss=new R,Es=new R;class Ot extends xe{constructor(t=new oe,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ur.fromBufferAttribute(u,t),a?vs.addScaledVector(Ur,h):vs.addScaledVector(Ur.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(_s.containsPoint(zn.origin)===!1&&(zn.intersectSphere(_s,Co)===null||zn.origin.distanceToSquared(Co)>(t.far-t.near)**2))&&(Ro.copy(r).invert(),zn.copy(t.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,D=y;b<D;b+=3){const w=o.getX(b),A=o.getX(b+1),I=o.getX(b+2);s=bs(this,f,t,n,c,h,u,w,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);s=bs(this,a,t,n,c,h,u,S,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,D=y;b<D;b+=3){const w=b,A=b+1,I=b+2;s=bs(this,f,t,n,c,h,u,w,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,y=m+1,b=m+2;s=bs(this,a,t,n,c,h,u,S,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ih(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Un,o),l===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Es);return c<e.near||c>e.far?null:{distance:c,point:Es.clone(),object:i}}function bs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,pi),i.getVertexPosition(l,mi),i.getVertexPosition(c,gi);const h=Ih(i,t,e,n,pi,mi,gi,Ss);if(h){s&&(xs.fromBufferAttribute(s,o),ys.fromBufferAttribute(s,l),Ms.fromBufferAttribute(s,c),h.uv=en.getInterpolation(Ss,pi,mi,gi,xs,ys,Ms,new St)),r&&(xs.fromBufferAttribute(r,o),ys.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,c),h.uv1=en.getInterpolation(Ss,pi,mi,gi,xs,ys,Ms,new St)),a&&(Po.fromBufferAttribute(a,o),Lo.fromBufferAttribute(a,l),Io.fromBufferAttribute(a,c),h.normal=en.getInterpolation(Ss,pi,mi,gi,Po,Lo,Io,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};en.getNormal(pi,mi,gi,u.normal),h.face=u}return h}class ei extends oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(_,m,f,S,y,b,D,w,A,I,E){const v=b/A,P=D/I,z=b/2,k=D/2,V=w/2,q=A+1,G=I+1;let Y=0,H=0;const ct=new R;for(let mt=0;mt<G;mt++){const gt=mt*P-k;for(let Ht=0;Ht<q;Ht++){const $t=Ht*v-z;ct[_]=$t*S,ct[m]=gt*y,ct[f]=V,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[f]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Ht/A),u.push(1-mt/I),Y+=1}}for(let mt=0;mt<I;mt++)for(let gt=0;gt<A;gt++){const Ht=d+gt+q*mt,$t=d+gt+q*(mt+1),W=d+(gt+1)+q*(mt+1),J=d+(gt+1)+q*mt;l.push(Ht,$t,J),l.push($t,W,J),H+=6}o.addGroup(p,H,E),p+=H,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Dh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Uh={clone:Ui,merge:Ie};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,Do=new St,Uo=new St;class ke extends Yl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Do,Uo),e.subVectors(Uo,Do)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class Oh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(_i,vi,t,e);s.layers=this.layers,this.add(s);const r=new ke(_i,vi,t,e);r.layers=this.layers,this.add(r);const a=new ke(_i,vi,t,e);a.layers=this.layers,this.add(a);const o=new ke(_i,vi,t,e);o.layers=this.layers,this.add(o);const l=new ke(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new ke(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends Ce{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kh extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ei(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Ln});r.uniforms.tEquirect.value=e;const a=new Ot(s,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=tn),new Oh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Nr=new R,Bh=new R,zh=new It;class Wn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(Bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ns,ws=new R;class Ya{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],S=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+g,b+S).normalize(),n[3].setComponents(l-a,d-h,m-g,b-S).normalize(),n[4].setComponents(l-o,d-u,m-_,b-y).normalize(),e===vn)n[5].setComponents(l+o,d+u,m+_,b+y).normalize();else if(e===js)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $l(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ki extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*d-a;for(let y=0;y<c;y++){const b=y*u-r;g.push(b,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const y=S+c*f,b=S+c*(f+1),D=S+1+c*(f+1),w=S+1+c*f;p.push(y,b,w),p.push(b,D,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Gh,alphahash_pars_fragment:Vh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Kh,aomap_fragment:Yh,aomap_pars_fragment:jh,batching_pars_vertex:$h,batching_vertex:Zh,begin_vertex:Jh,beginnormal_vertex:Qh,bsdfs:tu,iridescence_fragment:eu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:hu,common:uu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:vu,colorspace_pars_fragment:xu,envmap_fragment:yu,envmap_common_pars_fragment:Mu,envmap_pars_fragment:Su,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Uu,envmap_vertex:bu,fog_vertex:wu,fog_pars_vertex:Tu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Pu,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Iu,lights_pars_begin:Du,lights_toon_fragment:Nu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:ku,lights_physical_fragment:Bu,lights_physical_pars_fragment:zu,lights_fragment_begin:Hu,lights_fragment_maps:Gu,lights_fragment_end:Vu,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Ku,map_fragment:Yu,map_pars_fragment:ju,map_particle_fragment:$u,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:vd,dithering_fragment:xd,dithering_pars_fragment:yd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:bd,shadowmap_vertex:wd,shadowmask_pars_fragment:Td,skinbase_vertex:Ad,skinning_pars_vertex:Rd,skinning_vertex:Cd,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Id,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ud,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:kd,uv_vertex:Bd,worldpos_vertex:zd,background_vert:Hd,background_frag:Gd,backgroundCube_vert:Vd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Kd,depth_frag:Yd,distanceRGBA_vert:jd,distanceRGBA_frag:$d,equirect_vert:Zd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:tf,meshbasic_vert:ef,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:hf,meshphong_frag:uf,meshphysical_vert:df,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:_f,shadow_vert:vf,shadow_frag:xf,sprite_vert:yf,sprite_frag:Mf},it={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},an={basic:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ie([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ie([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ie([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ie([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ie([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ie([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ie([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ie([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ie([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ie([it.lights,it.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};an.physical={uniforms:Ie([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ts={r:0,b:0,g:0},Gn=new Be,Sf=new te;function Ef(i,t,e,n,s,r,a){const o=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const b=g(S);b===null?f(o,l):b&&b.isColor&&(f(b,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===rr)?(h===void 0&&(h=new Ot(new ei(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ui(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(y.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(Gn)),h.material.toneMapped=jt.getTransfer(b.colorSpace)!==ie,(u!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ot(new ki(2,2),new cn({name:"BackgroundMaterial",uniforms:Ui(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,y){S.getRGB(Ts,Kl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:_,addToRenderList:m}}function bf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,P,z,k,V){let q=!1;const G=u(k,z,P);r!==G&&(r=G,c(r.object)),q=p(v,k,z,V),q&&g(v,k,z,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(v,P,z,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,z){const k=z.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let G=q[k];return G===void 0&&(G=d(l()),q[k]=G),G}function d(v){const P=[],z=[],k=[];for(let V=0;V<e;V++)P[V]=0,z[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,P,z,k){const V=r.attributes,q=P.attributes;let G=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const mt=V[H];let gt=q[H];if(gt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(v,P,z,k){const V={},q=P.attributes;let G=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let mt=q[H];mt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),V[H]=gt,G++}r.attributes=V,r.attributesNum=G,r.index=k}function _(){const v=r.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){const z=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;z[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),V[v]!==P&&(i.vertexAttribDivisor(v,P),V[v]=P)}function S(){const v=r.newAttributes,P=r.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==v[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function y(v,P,z,k,V,q,G){G===!0?i.vertexAttribIPointer(v,P,z,V,q):i.vertexAttribPointer(v,P,z,k,V,q)}function b(v,P,z,k){_();const V=k.attributes,q=z.getAttributes(),G=P.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let ct=V[Y];if(ct===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const mt=ct.normalized,gt=ct.itemSize,Ht=t.get(ct);if(Ht===void 0)continue;const $t=Ht.buffer,W=Ht.type,J=Ht.bytesPerElement,dt=W===i.INT||W===i.UNSIGNED_INT||ct.gpuType===ka;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Pt=ot.stride,Nt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)f(H.location+kt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let kt=0;kt<H.locationSize;kt++)y(H.location+kt,gt/H.locationSize,W,mt,Pt*J,(Nt+gt/H.locationSize*kt)*J,dt)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)f(H.location+ot,ct.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ot=0;ot<H.locationSize;ot++)y(H.location+ot,gt/H.locationSize,W,mt,gt*J,gt/H.locationSize*ot*J,dt)}}else if(G!==void 0){const mt=G[Y];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(H.location,mt);break;case 3:i.vertexAttrib3fv(H.location,mt);break;case 4:i.vertexAttrib4fv(H.location,mt);break;default:i.vertexAttrib1fv(H.location,mt)}}}}S()}function D(){I();for(const v in n){const P=n[v];for(const z in P){const k=P[z];for(const V in k)h(k[V].object),delete k[V];delete P[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const z in P){const k=P[z];for(const V in k)h(k[V].object),delete k[V];delete P[z]}delete n[v.id]}function A(v){for(const P in n){const z=n[P];if(z[v.id]===void 0)continue;const k=z[v.id];for(const V in k)h(k[V].object),delete k[V];delete z[v.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function wf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==nn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:b,maxSamples:D}}function Af(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Wn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,y=S*4;let b=f.clippingState||null;l.value=b,b=h(g,d,y,p);for(let D=0;D!==y;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==_;++y,b+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Rf(i){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Pi:o===ta&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ja extends Yl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,No=[.125,.215,.35,.446,.526,.582],Yn=20,Fr=new ja,Fo=new Ct;let Or=null,kr=0,Br=0,zr=!1;const Xn=(1+Math.sqrt(5))/2,xi=1/Xn,Oo=[new R(-Xn,xi,0),new R(Xn,xi,0),new R(-xi,0,Xn),new R(xi,0,Xn),new R(0,Xn,-xi),new R(0,Xn,xi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,kr,Br),this._renderer.xr.enabled=zr,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ts,format:nn,colorSpace:Fn,depthBuffer:!1},s=Bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(r)),this._blurMaterial=Pf(r,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fo),h.toneMapping=In,h.autoClear=!1;const p=new Te({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new Ot(new ei,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Fo),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;As(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oo[(s-r-1)%Oo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let S=0;for(let A=0;A<Yn;++A){const I=A/_,E=Math.exp(-I*I/2);f.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[s],D=3*b*(s>y-wi?s-y+wi:0),w=4*(this._cubeSize-b);As(e,D,w,3*b,2*b),l.setRenderTarget(e),l.render(u,Fr)}}function Cf(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+No.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-wi?l=No[a-i+wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,I=w>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(E,_*g*w),y.set(d,m*g*w);const v=[w,w,w,w,w,w];b.set(v,f*g*w)}const D=new oe;D.setAttribute("position",new ne(S,_)),D.setAttribute("uv",new ne(y,m)),D.setAttribute("faceIndex",new ne(b,f)),t.push(D),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bo(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pf(i,t,e){const n=new Float32Array(Yn),s=new R(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function zo(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ho(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qr||l===ta,h=l===Pi||l===Li;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ko(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ko(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function If(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Df(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let y=0,b=S.length;y<b;y+=3){const D=S[y+0],w=S[y+1],A=S[y+2];d.push(D,w,w,A,A,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const D=y+0,w=y+1,A=y+2;d.push(D,w,w,A,A,D)}}else return;const m=new(zl(d)?ql:Xl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Uf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S];for(let S=0;S<_.length;S++)e.update(f,n,_[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Nf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ff(i,t,e){const n=new WeakMap,s=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let D=o.attributes.position.count*b,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*w*4*u),I=new Gl(A,D,w,u);I.type=_n,I.needsUpdate=!0;const E=b*4;for(let P=0;P<u;P++){const z=f[P],k=S[P],V=y[P],q=D*w*4*P;for(let G=0;G<z.count;G++){const Y=G*E;g===!0&&(s.fromBufferAttribute(z,G),A[q+Y+0]=s.x,A[q+Y+1]=s.y,A[q+Y+2]=s.z,A[q+Y+3]=0),_===!0&&(s.fromBufferAttribute(k,G),A[q+Y+4]=s.x,A[q+Y+5]=s.y,A[q+Y+6]=s.z,A[q+Y+7]=0),m===!0&&(s.fromBufferAttribute(V,G),A[q+Y+8]=s.x,A[q+Y+9]=s.y,A[q+Y+10]=s.z,A[q+Y+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new St(D,w)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Of(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Zl extends Ce{constructor(t,e,n,s,r,a,o,l,c,h=Ai){if(h!==Ai&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Jn),n===void 0&&h===Di&&(n=Ii),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jl=new Ce,Go=new Zl(1,1),Ql=new Gl,tc=new Sh,ec=new jl,Vo=[],Wo=[],Xo=new Float32Array(16),qo=new Float32Array(9),Ko=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vo[s];if(r===void 0&&(r=new Float32Array(s),Vo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function or(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Gf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),Me(e,n)}}function Vf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),Me(e,n)}}function Wf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),Me(e,n)}}function Xf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function jf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Qf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Go.compareFunction=Bl,r=Go):r=Jl,e.setTexture2D(t||r,s)}function tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tc,s)}function ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ec,s)}function np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ql,s)}function ip(i){switch(i){case 5126:return kf;case 35664:return Bf;case 35665:return zf;case 35666:return Hf;case 35674:return Gf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Kf;case 35669:case 35673:return Yf;case 5125:return jf;case 36294:return $f;case 36295:return Zf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}function sp(i,t){i.uniform1fv(this.addr,t)}function rp(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function ap(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function op(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function lp(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cp(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hp(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function up(i,t){i.uniform1iv(this.addr,t)}function dp(i,t){i.uniform2iv(this.addr,t)}function fp(i,t){i.uniform3iv(this.addr,t)}function pp(i,t){i.uniform4iv(this.addr,t)}function mp(i,t){i.uniform1uiv(this.addr,t)}function gp(i,t){i.uniform2uiv(this.addr,t)}function _p(i,t){i.uniform3uiv(this.addr,t)}function vp(i,t){i.uniform4uiv(this.addr,t)}function xp(i,t,e){const n=this.cache,s=t.length,r=or(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jl,r[a])}function yp(i,t,e){const n=this.cache,s=t.length,r=or(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tc,r[a])}function Mp(i,t,e){const n=this.cache,s=t.length,r=or(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ec,r[a])}function Sp(i,t,e){const n=this.cache,s=t.length,r=or(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ql,r[a])}function Ep(i){switch(i){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Sp}}class bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ip(e.type)}}class wp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ep(e.type)}}class Tp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Yo(i,t){i.seq.push(t),i.map[t.id]=t}function Ap(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),a=Hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yo(e,c===void 0?new bp(o,i,t):new wp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Tp(o),Yo(e,u)),e=u}}}class Vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ap(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function jo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rp=37297;let Cp=0;function Pp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Lp(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===Ys&&e===Ks?n="LinearDisplayP3ToLinearSRGB":t===Ks&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case ar:return[n,"LinearTransferOETF"];case qe:case Xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $o(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pp(i.getShaderSource(t),a)}else return s}function Ip(i,t){const e=Lp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dp(i,t){let e;switch(t){case $c:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="OptimizedCineon";break;case Qc:e="ACESFilmic";break;case eh:e="AgX";break;case nh:e="Neutral";break;case th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Up(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Np(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zi(i){return i!==""}function Zo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Op,Bp)}const kp=new Map;function Bp(i,t){let e=Ut[t];if(e===void 0){const n=kp.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(i){return i.replace(zp,Hp)}function Hp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Xp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oa:t="ENVMAP_BLENDING_MULTIPLY";break;case Yc:t="ENVMAP_BLENDING_MIX";break;case jc:t="ENVMAP_BLENDING_ADD";break}return t}function qp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Gp(e),c=Vp(e),h=Wp(e),u=Xp(e),d=qp(e),p=Up(e),g=Np(r),_=s.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),f.length>0&&(f+=`
`)):(m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),f=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Ut.tonemapping_pars_fragment:"",e.toneMapping!==In?Dp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Ip("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),a=La(a),a=Zo(a,e),a=Jo(a,e),o=La(o),o=Zo(o,e),o=Jo(o,e),a=Qo(a),o=Qo(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=S+m+a,b=S+f+o,D=jo(s,s.VERTEX_SHADER,y),w=jo(s,s.FRAGMENT_SHADER,b);s.attachShader(_,D),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(w).trim();let q=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,w);else{const Y=$o(s,D,"vertex"),H=$o(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(D),s.deleteShader(w),I=new Vs(s,_),E=Fp(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Rp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let Yp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $p(t),e.set(t,n)),n}}class $p{constructor(t){this.id=Yp++,this.code=t,this.usedTimes=0}}function Zp(i,t,e,n,s,r,a){const o=new Vl,l=new jp,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,z,k){const V=z.fog,q=k.geometry,G=E.isMeshStandardMaterial?z.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),H=Y&&Y.mapping===rr?Y.image.height:null,ct=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=mt!==void 0?mt.length:0;let Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let $t,W,J,dt;if(ct){const Wt=an[ct];$t=Wt.vertexShader,W=Wt.fragmentShader}else $t=E.vertexShader,W=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),dt=l.getFragmentShaderID(E);const ot=i.getRenderTarget(),Pt=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,kt=!!E.map,le=!!E.matcap,C=!!Y,fe=!!E.aoMap,Yt=!!E.lightMap,Zt=!!E.bumpMap,vt=!!E.normalMap,pe=!!E.displacementMap,At=!!E.emissiveMap,Lt=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,B=E.clearcoat>0,$=E.dispersion>0,Z=E.iridescence>0,j=E.sheen>0,xt=E.transmission>0,st=x&&!!E.anisotropyMap,lt=B&&!!E.clearcoatMap,Dt=B&&!!E.clearcoatNormalMap,Q=B&&!!E.clearcoatRoughnessMap,at=Z&&!!E.iridescenceMap,Gt=Z&&!!E.iridescenceThicknessMap,Tt=j&&!!E.sheenColorMap,ht=j&&!!E.sheenRoughnessMap,Rt=!!E.specularMap,Ft=!!E.specularColorMap,ae=!!E.specularIntensityMap,L=xt&&!!E.transmissionMap,tt=xt&&!!E.thicknessMap,X=!!E.gradientMap,K=!!E.alphaMap,nt=E.alphaTest>0,Et=!!E.alphaHash,Vt=!!E.extensions;let me=In;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(me=i.toneMapping);const be={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:W,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Fn,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:le,envMap:C,envMapMode:C&&Y.mapping,envMapCubeUVHeight:H,aoMap:fe,lightMap:Yt,bumpMap:Zt,normalMap:vt,displacementMap:d&&pe,emissiveMap:At,normalMapObjectSpace:vt&&E.normalMapType===ah,normalMapTangentSpace:vt&&E.normalMapType===Wa,metalnessMap:Lt,roughnessMap:T,anisotropy:x,anisotropyMap:st,clearcoat:B,clearcoatMap:lt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:at,iridescenceThicknessMap:Gt,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:ht,specularMap:Rt,specularColorMap:Ft,specularIntensityMap:ae,transmission:xt,transmissionMap:L,thicknessMap:tt,gradientMap:X,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:nt,alphaHash:Et,combine:E.combine,mapUv:kt&&_(E.map.channel),aoMapUv:fe&&_(E.aoMap.channel),lightMapUv:Yt&&_(E.lightMap.channel),bumpMapUv:Zt&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:pe&&_(E.displacementMap.channel),emissiveMapUv:At&&_(E.emissiveMap.channel),metalnessMapUv:Lt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:st&&_(E.anisotropyMap.channel),clearcoatMapUv:lt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(E.sheenRoughnessMap.channel),specularMapUv:Rt&&_(E.specularMap.channel),specularColorMapUv:Ft&&_(E.specularColorMap.channel),specularIntensityMapUv:ae&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:tt&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(vt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(kt||K),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function f(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(v,E),y(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function S(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),E.push(o.mask)}function b(E){const v=g[E.type];let P;if(v){const z=an[v];P=Uh.clone(z.uniforms)}else P=E.uniforms;return P}function D(E,v){let P;for(let z=0,k=h.length;z<k;z++){const V=h[z];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Kp(i,v,E,r),h.push(P)),P}function w(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:I}}function Jp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Qp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function el(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Qp),n.length>1&&n.sort(d||el),s.length>1&&s.sort(d||el)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new nl,i.set(n,[a])):s>=r.length?(a=new nl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function em(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ct};break;case"SpotLight":e={position:new R,direction:new R,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function nm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let im=0;function sm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rm(i){const t=new em,e=nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new te,a=new te;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,y=0,b=0,D=0,w=0,A=0;c.sort(sm);for(let E=0,v=c.length;E<v;E++){const P=c[E],z=P.color,k=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],k);A++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,b++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(k),G.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==b||I.numSpotMaps!==D||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=b,I.numSpotMaps=D,I.numLightProbes=A,n.version=im++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const y=c[f];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function il(i){const t=new rm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function am(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new il(i),t.set(s,[o])):r>=a.length?(o=new il(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class om extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lm extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(i,t,e){let n=new Ya;const s=new St,r=new St,a=new se,o=new om({depthPacking:rh}),l=new lm,c={},h=e.maxTextureSize,u={[Un]:Ue,[Ue]:Un,[Qe]:Qe},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:cm,fragmentShader:hm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new oe;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let f=this.type;this.render=function(w,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ln),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==gn&&this.type===gn,V=f===gn&&this.type!==gn;for(let q=0,G=w.length;q<G;q++){const Y=w[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ct=H.getFrameExtents();if(s.multiply(ct),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,H.mapSize.y=r.y)),H.map===null||k===!0||V===!0){const gt=this.type!==gn?{minFilter:Ke,magFilter:Ke}:{};H.map!==null&&H.map.dispose(),H.map=new Qn(s.x,s.y,gt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const mt=H.getViewportCount();for(let gt=0;gt<mt;gt++){const Ht=H.getViewport(gt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(a),H.updateMatrices(Y,gt),n=H.getFrustum(),b(A,I,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===gn&&S(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,P)};function S(w,A){const I=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function y(w,A,I,E){let v=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=v.uuid,k=A.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let q=V[k];q===void 0&&(q=v.clone(),V[k]=q,A.addEventListener("dispose",D)),v=q}if(v.visible=A.visible,v.wireframe=A.wireframe,E===gn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=I}return v}function b(w,A,I,E,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const k=t.update(w),V=w.material;if(Array.isArray(V)){const q=k.groups;for(let G=0,Y=q.length;G<Y;G++){const H=q[G],ct=V[H.materialIndex];if(ct&&ct.visible){const mt=y(w,ct,E,v);w.onBeforeShadow(i,w,A,I,k,mt,H),i.renderBufferDirect(I,null,k,mt,w,H),w.onAfterShadow(i,w,A,I,k,mt,H)}}}else if(V.visible){const q=y(w,V,E,v);w.onBeforeShadow(i,w,A,I,k,q,null),i.renderBufferDirect(I,null,k,q,w,null),w.onAfterShadow(i,w,A,I,k,q,null)}}const z=w.children;for(let k=0,V=z.length;k<V;k++)b(z[k],A,I,E,v)}function D(w){w.target.removeEventListener("dispose",D);for(const I in c){const E=c[I],v=w.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function dm(i){function t(){let L=!1;const tt=new se;let X=null;const K=new se(0,0,0,0);return{setMask:function(nt){X!==nt&&!L&&(i.colorMask(nt,nt,nt,nt),X=nt)},setLocked:function(nt){L=nt},setClear:function(nt,Et,Vt,me,be){be===!0&&(nt*=me,Et*=me,Vt*=me),tt.set(nt,Et,Vt,me),K.equals(tt)===!1&&(i.clearColor(nt,Et,Vt,me),K.copy(tt))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function e(){let L=!1,tt=null,X=null,K=null;return{setTest:function(nt){nt?dt(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!L&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(X!==nt){switch(nt){case Hc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Vc:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Wc:i.depthFunc(i.EQUAL);break;case Xc:i.depthFunc(i.GEQUAL);break;case qc:i.depthFunc(i.GREATER);break;case Kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=nt}},setLocked:function(nt){L=nt},setClear:function(nt){K!==nt&&(i.clearDepth(nt),K=nt)},reset:function(){L=!1,tt=null,X=null,K=null}}}function n(){let L=!1,tt=null,X=null,K=null,nt=null,Et=null,Vt=null,me=null,be=null;return{setTest:function(Wt){L||(Wt?dt(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Wt){tt!==Wt&&!L&&(i.stencilMask(Wt),tt=Wt)},setFunc:function(Wt,hn,rn){(X!==Wt||K!==hn||nt!==rn)&&(i.stencilFunc(Wt,hn,rn),X=Wt,K=hn,nt=rn)},setOp:function(Wt,hn,rn){(Et!==Wt||Vt!==hn||me!==rn)&&(i.stencilOp(Wt,hn,rn),Et=Wt,Vt=hn,me=rn)},setLocked:function(Wt){L=Wt},setClear:function(Wt){be!==Wt&&(i.clearStencil(Wt),be=Wt)},reset:function(){L=!1,tt=null,X=null,K=null,nt=null,Et=null,Vt=null,me=null,be=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,S=null,y=null,b=null,D=null,w=new Ct(0,0,0),A=0,I=!1,E=null,v=null,P=null,z=null,k=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=G>=2);let H=null,ct={};const mt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Ht=new se().fromArray(mt),$t=new se().fromArray(gt);function W(L,tt,X,K){const nt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(L,Et),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<X;Vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(tt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Et}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Xs),Zt(!1),vt(ho),dt(i.CULL_FACE),fe(Ln);function dt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ot(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Pt(L,tt){return h[L]!==tt?(i.bindFramebuffer(L,tt),h[L]=tt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=tt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Nt(L,tt){let X=d,K=!1;if(L){X=u.get(tt),X===void 0&&(X=[],u.set(tt,X));const nt=L.textures;if(X.length!==nt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Vt=nt.length;Et<Vt;Et++)X[Et]=i.COLOR_ATTACHMENT0+Et;X.length=nt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function kt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const le={[Kn]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};le[Tc]=i.MIN,le[Ac]=i.MAX;const C={[Rc]:i.ZERO,[Cc]:i.ONE,[Pc]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[Fc]:i.SRC_ALPHA_SATURATE,[Uc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Lc]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Nc]:i.ONE_MINUS_DST_COLOR,[Dc]:i.ONE_MINUS_DST_ALPHA,[Oc]:i.CONSTANT_COLOR,[kc]:i.ONE_MINUS_CONSTANT_COLOR,[Bc]:i.CONSTANT_ALPHA,[zc]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(L,tt,X,K,nt,Et,Vt,me,be,Wt){if(L===Ln){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),L!==Ec){if(L!==_||Wt!==I){if((m!==Kn||y!==Kn)&&(i.blendEquation(i.FUNC_ADD),m=Kn,y=Kn),Wt)switch(L){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFunc(i.ONE,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,S=null,b=null,D=null,w.set(0,0,0),A=0,_=L,I=Wt}return}nt=nt||tt,Et=Et||X,Vt=Vt||K,(tt!==m||nt!==y)&&(i.blendEquationSeparate(le[tt],le[nt]),m=tt,y=nt),(X!==f||K!==S||Et!==b||Vt!==D)&&(i.blendFuncSeparate(C[X],C[K],C[Et],C[Vt]),f=X,S=K,b=Et,D=Vt),(me.equals(w)===!1||be!==A)&&(i.blendColor(me.r,me.g,me.b,be),w.copy(me),A=be),_=L,I=!1}function Yt(L,tt){L.side===Qe?ot(i.CULL_FACE):dt(i.CULL_FACE);let X=L.side===Ue;tt&&(X=!X),Zt(X),L.blending===Ti&&L.transparent===!1?fe(Ln):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function vt(L){L!==yc?(dt(i.CULL_FACE),L!==v&&(L===ho?i.cullFace(i.BACK):L===Mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),v=L}function pe(L){L!==P&&(q&&i.lineWidth(L),P=L)}function At(L,tt,X){L?(dt(i.POLYGON_OFFSET_FILL),(z!==tt||k!==X)&&(i.polygonOffset(tt,X),z=tt,k=X)):ot(i.POLYGON_OFFSET_FILL)}function Lt(L){L?dt(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+V-1),H!==L&&(i.activeTexture(L),H=L)}function x(L,tt,X){X===void 0&&(H===null?X=i.TEXTURE0+V-1:X=H);let K=ct[X];K===void 0&&(K={type:void 0,texture:void 0},ct[X]=K),(K.type!==L||K.texture!==tt)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(L,tt||J[L]),K.type=L,K.texture=tt)}function B(){const L=ct[H];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(L){Ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ht.copy(L))}function ht(L){$t.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$t.copy(L))}function Rt(L,tt){let X=l.get(tt);X===void 0&&(X=new WeakMap,l.set(tt,X));let K=X.get(L);K===void 0&&(K=i.getUniformBlockIndex(tt,L.name),X.set(L,K))}function Ft(L,tt){const K=l.get(tt).get(L);o.get(tt)!==K&&(i.uniformBlockBinding(tt,K,L.__bindingPointIndex),o.set(tt,K))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ct={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,S=null,y=null,b=null,D=null,w=new Ct(0,0,0),A=0,I=!1,E=null,v=null,P=null,z=null,k=null,Ht.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:ot,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:kt,setBlending:fe,setMaterial:Yt,setFlipSided:Zt,setCullFace:vt,setLineWidth:pe,setPolygonOffset:At,setScissorTest:Lt,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:at,texImage3D:Gt,updateUBOMapping:Rt,uniformBlockBinding:Ft,texStorage2D:Dt,texStorage3D:Q,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:lt,scissor:Tt,viewport:ht,reset:ae}}function sl(i,t,e,n){const s=fm(n);switch(e){case Il:return i*t;case Ul:return i*t;case Nl:return i*t*2;case Fl:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case ks:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case ba:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fm(i){switch(i){case yn:case Cl:return{byteLength:1,components:1};case Ji:case Pl:case ts:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case Jn:case ka:case _n:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Qi("canvas")}function _(T,x,B){let $=1;const Z=Lt(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor($*Z.width),xt=Math.floor($*Z.height);u===void 0&&(u=g(j,xt));const st=x?g(j,xt):u;return st.width=j,st.height=xt,st.getContext("2d").drawImage(T,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+xt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Ke&&T.minFilter!==tn}function f(T){i.generateMipmap(T)}function S(T,x,B,$,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),x===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),x===i.RGBA){const xt=Z?qs:jt.getTransfer($);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=xt===ie?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(T,x){let B;return T?x===null||x===Jn||x===Ii?B=i.DEPTH24_STENCIL8:x===_n?B=i.DEPTH32F_STENCIL8:x===Ji&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Ii?B=i.DEPTH_COMPONENT24:x===_n?B=i.DEPTH_COMPONENT32F:x===Ji&&(B=i.DEPTH_COMPONENT16),B}function b(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){const x=T.target;x.removeEventListener("dispose",D),A(x),x.isVideoTexture&&h.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),E(x)}function A(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const Z=$[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function I(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,$=d.get(B);delete $[x.__cacheKey],a.memory.textures--}function E(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Z=0;Z<x.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const j=n.get(B[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(T)}let v=0;function P(){v=0}function z(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function k(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const B=n.get(T);if(T.isVideoTexture&&pe(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(B,T,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function q(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$t(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function G(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$t(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Y(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){W(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const H={[ea]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ct={[Ke]:i.NEAREST,[ih]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},mt={[oh]:i.NEVER,[fh]:i.ALWAYS,[lh]:i.LESS,[Bl]:i.LEQUAL,[ch]:i.EQUAL,[dh]:i.GEQUAL,[hh]:i.GREATER,[uh]:i.NOTEQUAL};function gt(T,x){if(x.type===_n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===mr||x.magFilter===as||x.magFilter===$n||x.minFilter===tn||x.minFilter===mr||x.minFilter===as||x.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,H[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,H[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,H[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==as&&x.minFilter!==$n||x.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D));const $=x.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const j=k(x);if(j!==T.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[j].usedTimes++;const xt=Z[T.__cacheKey];xt!==void 0&&(Z[T.__cacheKey].usedTimes--,xt.usedTimes===0&&I(x)),T.__cacheKey=j,T.__webglTexture=Z[j].texture}return B}function $t(T,x,B){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const Z=Ht(T,x),j=x.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const xt=n.get(j);if(j.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const st=jt.getPrimaries(jt.workingColorSpace),lt=x.colorSpace===Cn?null:jt.getPrimaries(x.colorSpace),Dt=x.colorSpace===Cn||st===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Q=_(x.image,!1,s.maxTextureSize);Q=At(x,Q);const at=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type);let Tt=S(x.internalFormat,at,Gt,x.colorSpace,x.isVideoTexture);gt($,x);let ht;const Rt=x.mipmaps,Ft=x.isVideoTexture!==!0,ae=xt.__version===void 0||Z===!0,L=j.dataReady,tt=b(x,Q);if(x.isDepthTexture)Tt=y(x.format===Di,x.type),ae&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,at,Gt,null));else if(x.isDataTexture)if(Rt.length>0){Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,tt,Tt,Rt[0].width,Rt[0].height);for(let X=0,K=Rt.length;X<K;X++)ht=Rt[X],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ht.width,ht.height,at,Gt,ht.data):e.texImage2D(i.TEXTURE_2D,X,Tt,ht.width,ht.height,0,at,Gt,ht.data);x.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(i.TEXTURE_2D,tt,Tt,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,at,Gt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,at,Gt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Tt,Rt[0].width,Rt[0].height,Q.depth);for(let X=0,K=Rt.length;X<K;X++)if(ht=Rt[X],x.format!==nn)if(at!==null)if(Ft){if(L)if(x.layerUpdates.size>0){const nt=sl(ht.width,ht.height,x.format,x.type);for(const Et of x.layerUpdates){const Vt=ht.data.subarray(Et*nt/ht.data.BYTES_PER_ELEMENT,(Et+1)*nt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Et,ht.width,ht.height,1,at,Vt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ht.width,ht.height,Q.depth,at,ht.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Tt,ht.width,ht.height,Q.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ht.width,ht.height,Q.depth,at,Gt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Tt,ht.width,ht.height,Q.depth,0,at,Gt,ht.data)}else{Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,tt,Tt,Rt[0].width,Rt[0].height);for(let X=0,K=Rt.length;X<K;X++)ht=Rt[X],x.format!==nn?at!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ht.width,ht.height,at,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Tt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ht.width,ht.height,at,Gt,ht.data):e.texImage2D(i.TEXTURE_2D,X,Tt,ht.width,ht.height,0,at,Gt,ht.data)}else if(x.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Tt,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){const X=sl(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const nt=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,at,Gt,nt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,Gt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,at,Gt,Q.data);else if(x.isData3DTexture)Ft?(ae&&e.texStorage3D(i.TEXTURE_3D,tt,Tt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,Gt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,at,Gt,Q.data);else if(x.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(i.TEXTURE_2D,tt,Tt,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let nt=0;nt<tt;nt++)e.texImage2D(i.TEXTURE_2D,nt,Tt,X,K,0,at,Gt,null),X>>=1,K>>=1}}else if(Rt.length>0){if(Ft&&ae){const X=Lt(Rt[0]);e.texStorage2D(i.TEXTURE_2D,tt,Tt,X.width,X.height)}for(let X=0,K=Rt.length;X<K;X++)ht=Rt[X],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,at,Gt,ht):e.texImage2D(i.TEXTURE_2D,X,Tt,at,Gt,ht);x.generateMipmaps=!1}else if(Ft){if(ae){const X=Lt(Q);e.texStorage2D(i.TEXTURE_2D,tt,Tt,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Gt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Tt,at,Gt,Q);m(x)&&f($),xt.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function W(T,x,B){if(x.image.length!==6)return;const $=Ht(T,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const j=n.get(Z);if(Z.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const xt=jt.getPrimaries(jt.workingColorSpace),st=x.colorSpace===Cn?null:jt.getPrimaries(x.colorSpace),lt=x.colorSpace===Cn||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Dt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,at=[];for(let K=0;K<6;K++)!Dt&&!Q?at[K]=_(x.image[K],!0,s.maxCubemapSize):at[K]=Q?x.image[K].image:x.image[K],at[K]=At(x,at[K]);const Gt=at[0],Tt=r.convert(x.format,x.colorSpace),ht=r.convert(x.type),Rt=S(x.internalFormat,Tt,ht,x.colorSpace),Ft=x.isVideoTexture!==!0,ae=j.__version===void 0||$===!0,L=Z.dataReady;let tt=b(x,Gt);gt(i.TEXTURE_CUBE_MAP,x);let X;if(Dt){Ft&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Rt,Gt.width,Gt.height);for(let K=0;K<6;K++){X=at[K].mipmaps;for(let nt=0;nt<X.length;nt++){const Et=X[nt];x.format!==nn?Tt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Et.width,Et.height,Tt,ht,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Rt,Et.width,Et.height,0,Tt,ht,Et.data)}}}else{if(X=x.mipmaps,Ft&&ae){X.length>0&&tt++;const K=Lt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Rt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,at[K].width,at[K].height,Tt,ht,at[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Rt,at[K].width,at[K].height,0,Tt,ht,at[K].data);for(let nt=0;nt<X.length;nt++){const Vt=X[nt].image[K].image;Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Vt.width,Vt.height,Tt,ht,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Rt,Vt.width,Vt.height,0,Tt,ht,Vt.data)}}else{Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,ht,at[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Rt,Tt,ht,at[K]);for(let nt=0;nt<X.length;nt++){const Et=X[nt];Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Tt,ht,Et.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Rt,Tt,ht,Et.image[K])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),j.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,B,$,Z,j){const xt=r.convert(B.format,B.colorSpace),st=r.convert(B.type),lt=S(B.internalFormat,xt,st,B.colorSpace);if(!n.get(x).__hasExternalTextures){const Q=Math.max(1,x.width>>j),at=Math.max(1,x.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,lt,Q,at,x.depth,0,xt,st,null):e.texImage2D(Z,j,lt,Q,at,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,0,Zt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(B).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,Z=$&&$.isDepthTexture?$.type:null,j=y(x.stencilBuffer,Z),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Zt(x);vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,j,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const $=x.textures;for(let Z=0;Z<$.length;Z++){const j=$[Z],xt=r.convert(j.format,j.colorSpace),st=r.convert(j.type),lt=S(j.internalFormat,xt,st,j.colorSpace),Dt=Zt(x);B&&vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,lt,x.width,x.height):vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,Z=Zt(x);if(x.depthTexture.format===Ai)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===Di)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ot(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=i.createRenderbuffer(),dt(x.__webglDepthbuffer[$],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),dt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(T,x,B){const $=n.get(T);x!==void 0&&J($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pt(T)}function kt(T){const x=T.texture,B=n.get(T),$=n.get(x);T.addEventListener("dispose",w);const Z=T.textures,j=T.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let lt=0;lt<x.mipmaps.length;lt++)B.__webglFramebuffer[st][lt]=i.createFramebuffer()}else B.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)B.__webglFramebuffer[st]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,lt=Z.length;st<lt;st++){const Dt=n.get(Z[st]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&vt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const lt=Z[st];B.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const Dt=r.convert(lt.format,lt.colorSpace),Q=r.convert(lt.type),at=S(lt.internalFormat,Dt,Q,lt.colorSpace,T.isXRRenderTarget===!0),Gt=Zt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,B.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),gt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)J(B.__webglFramebuffer[st][lt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else J(B.__webglFramebuffer[st],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,lt=Z.length;st<lt;st++){const Dt=Z[st],Q=n.get(Dt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),gt(i.TEXTURE_2D,Dt),J(B.__webglFramebuffer,T,Dt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),m(Dt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),gt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)J(B.__webglFramebuffer[lt],T,x,i.COLOR_ATTACHMENT0,st,lt);else J(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,st,0);m(x)&&f(st),e.unbindTexture()}T.depthBuffer&&Pt(T)}function le(T){const x=T.textures;for(let B=0,$=x.length;B<$;B++){const Z=x[B];if(m(Z)){const j=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Z).__webglTexture;e.bindTexture(j,xt),f(j),e.unbindTexture()}}}const C=[],fe=[];function Yt(T){if(T.samples>0){if(vt(T)===!1){const x=T.textures,B=T.width,$=T.height;let Z=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),st=x.length>1;if(st)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const Dt=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),l===!0&&(C.length=0,fe.length=0,C.push(i.COLOR_ATTACHMENT0+lt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(C.push(j),fe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[lt]);const Dt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Zt(T){return Math.min(s.maxSamples,T.samples)}function vt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function At(T,x){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Fn&&B!==Cn&&(jt.getTransfer(B)===ie?($!==nn||Z!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Nt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=vt}function mm(i,t){function e(n,s=Cn){let r;const a=jt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.BYTE;if(n===Pl)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Dl)return i.RGB;if(n===nn)return i.RGBA;if(n===Ul)return i.LUMINANCE;if(n===Nl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===ks||n===Bs||n===zs||n===Hs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===ba||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gs)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Ta||n===Aa||n===Ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ye extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:vm,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends Oi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new ym,m=e.getContextAttributes();let f=null,S=null;const y=[],b=[],D=new St;let w=null;const A=new ke;A.layers.enable(1),A.viewport=new se;const I=new ke;I.layers.enable(2),I.viewport=new se;const E=[A,I],v=new gm;v.layers.enable(1),v.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=y[W];return J===void 0&&(J=new Gr,y[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=y[W];return J===void 0&&(J=new Gr,y[W]=J),J.getGripSpace()},this.getHand=function(W){let J=y[W];return J===void 0&&(J=new Gr,y[W]=J),J.getHandSpace()};function k(W){const J=b.indexOf(W.inputSource);if(J===-1)return;const dt=y[J];dt!==void 0&&(dt.update(W.inputSource,W.frame,c||a),dt.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let W=0;W<y.length;W++){const J=b[W];J!==null&&(b[W]=null,y[W].disconnect(J))}P=null,z=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,dt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Di:Ai,dt=m.stencil?Ii:Jn);const Pt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Qn(d.textureWidth,d.textureHeight,{format:nn,type:yn,depthTexture:new Zl(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let J=0;J<W.removed.length;J++){const dt=W.removed[J],ot=b.indexOf(dt);ot>=0&&(b[ot]=null,y[ot].disconnect(dt))}for(let J=0;J<W.added.length;J++){const dt=W.added[J];let ot=b.indexOf(dt);if(ot===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=b.length){b.push(dt),ot=Nt;break}else if(b[Nt]===null){b[Nt]=dt,ot=Nt;break}if(ot===-1)break}const Pt=y[ot];Pt&&Pt.connect(dt)}}const G=new R,Y=new R;function H(W,J,dt){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const ot=G.distanceTo(Y),Pt=J.projectionMatrix.elements,Nt=dt.projectionMatrix.elements,kt=Pt[14]/(Pt[10]-1),le=Pt[14]/(Pt[10]+1),C=(Pt[9]+1)/Pt[5],fe=(Pt[9]-1)/Pt[5],Yt=(Pt[8]-1)/Pt[0],Zt=(Nt[8]+1)/Nt[0],vt=kt*Yt,pe=kt*Zt,At=ot/(-Yt+Zt),Lt=At*-Yt;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Lt),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=kt+At,x=le+At,B=vt-Lt,$=pe+(ot-Lt),Z=C*le/x*T,j=fe*le/x*T;W.projectionMatrix.makePerspective(B,$,Z,j,T,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ct(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=I.near=A.near=W.near,v.far=I.far=A.far=W.far,(P!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,z=v.far,A.near=P,A.far=z,I.near=P,I.far=z,A.updateProjectionMatrix(),I.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,dt=v.cameras;ct(v,J);for(let ot=0;ot<dt.length;ot++)ct(dt[ot],J);dt.length===2?H(v,A,I):v.projectionMatrix.copy(A.projectionMatrix),mt(W,v,J)};function mt(W,J,dt){dt===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(dt.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let gt=null;function Ht(W,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Nt=0;Nt<dt.length;Nt++){const kt=dt[Nt];let le=null;if(p!==null)le=p.getViewport(kt);else{const fe=u.getViewSubImage(d,kt);le=fe.viewport,Nt===0&&(t.setRenderTargetTextures(S,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(S))}let C=E[Nt];C===void 0&&(C=new ke,C.layers.enable(Nt),C.viewport=new se,E[Nt]=C),C.matrix.fromArray(kt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(kt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(le.x,le.y,le.width,le.height),Nt===0&&(v.matrix.copy(C.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(C)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=u.getDepthInformation(dt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let dt=0;dt<y.length;dt++){const ot=b[dt],Pt=y[dt];ot!==null&&Pt!==void 0&&Pt.update(ot,J,c||a)}gt&&gt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const $t=new $l;$t.setAnimationLoop(Ht),this.setAnimationLoop=function(W){gt=W},this.dispose=function(){}}}const Vn=new Be,Sm=new te;function Em(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),y=S.envMap,b=S.envMapRotation;y&&(m.envMap.value=y,Vn.copy(b),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(Vn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(S,D);const w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const y=u();S.__bindingPointIndex=y;const b=i.createBuffer(),D=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],b=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=b.length;w<A;w++){const I=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,v=I.length;E<v;E++){const P=I[E];if(p(P,w,E,D)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<k.length;q++){const G=k[q],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,b,D){const w=S.value,A=y+"_"+b;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const I=D[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return D[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(S){const y=S.uniforms;let b=0;const D=16;for(let A=0,I=y.length;A<I;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,P=E.length;v<P;v++){const z=E[v],k=Array.isArray(z.value)?z.value:[z.value];for(let V=0,q=k.length;V<q;V++){const G=k[V],Y=_(G),H=b%D;H!==0&&D-H<Y.boundary&&(b+=D-H),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=Y.storage}}}const w=b%D;return w>0&&(b+=D-w),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class wm{constructor(t={}){const{canvas:e=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let b=!1,D=0,w=0,A=null,I=-1,E=null;const v=new se,P=new se;let z=null;const k=new Ct(0);let V=0,q=e.width,G=e.height,Y=1,H=null,ct=null;const mt=new se(0,0,q,G),gt=new se(0,0,q,G);let Ht=!1;const $t=new Ya;let W=!1,J=!1;const dt=new te,ot=new R,Pt=new se,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function le(){return A===null?Y:1}let C=n;function fe(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",nt,!1),C===null){const U="webgl2";if(C=fe(U,M),C===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Yt,Zt,vt,pe,At,Lt,T,x,B,$,Z,j,xt,st,lt,Dt,Q,at,Gt,Tt,ht,Rt,Ft,ae;function L(){Yt=new If(C),Yt.init(),Rt=new mm(C,Yt),Zt=new Tf(C,Yt,t,Rt),vt=new dm(C),pe=new Nf(C),At=new Jp,Lt=new pm(C,Yt,vt,At,Zt,Rt,pe),T=new Rf(y),x=new Lf(y),B=new Hh(C),Ft=new bf(C,B),$=new Df(C,B,pe,Ft),Z=new Of(C,$,B,pe),Gt=new Ff(C,Zt,Lt),Dt=new Af(At),j=new Zp(y,T,x,Yt,Zt,Ft,Dt),xt=new Em(y,At),st=new tm,lt=new am(Yt),at=new Ef(y,T,x,vt,Z,d,l),Q=new um(y,Z,Zt),ae=new bm(C,pe,Zt,vt),Tt=new wf(C,Yt,pe),ht=new Uf(C,Yt,pe),pe.programs=j.programs,y.capabilities=Zt,y.extensions=Yt,y.properties=At,y.renderLists=st,y.shadowMap=Q,y.state=vt,y.info=pe}L();const tt=new Mm(y,C);this.xr=tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(q,G,!1))},this.getSize=function(M){return M.set(q,G)},this.setSize=function(M,U,F=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,G=U,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),F===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(q*Y,G*Y).floor()},this.setDrawingBufferSize=function(M,U,F){q=M,G=U,Y=F,e.width=Math.floor(M*F),e.height=Math.floor(U*F),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,U,F,O){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,U,F,O),vt.viewport(v.copy(mt).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(gt)},this.setScissor=function(M,U,F,O){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,U,F,O),vt.scissor(P.copy(gt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(M){vt.setScissorTest(Ht=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(M=!0,U=!0,F=!0){let O=0;if(M){let N=!1;if(A!==null){const et=A.texture.format;N=et===Va||et===Ga||et===Ha}if(N){const et=A.texture.type,rt=et===yn||et===Jn||et===Ji||et===Ii||et===Ba||et===za,ft=at.getClearColor(),pt=at.getClearAlpha(),bt=ft.r,wt=ft.g,yt=ft.b;rt?(p[0]=bt,p[1]=wt,p[2]=yt,p[3]=pt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=bt,g[1]=wt,g[2]=yt,g[3]=pt,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}U&&(O|=C.DEPTH_BUFFER_BIT),F&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),st.dispose(),lt.dispose(),At.dispose(),T.dispose(),x.dispose(),Z.dispose(),Ft.dispose(),ae.dispose(),j.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",rn),tt.removeEventListener("sessionend",io),On.stop()};function X(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=pe.autoReset,U=Q.enabled,F=Q.autoUpdate,O=Q.needsUpdate,N=Q.type;L(),pe.autoReset=M,Q.enabled=U,Q.autoUpdate=F,Q.needsUpdate=O,Q.type=N}function nt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){const U=M.target;U.removeEventListener("dispose",Et),Vt(U)}function Vt(M){me(M),At.remove(M)}function me(M){const U=At.get(M).programs;U!==void 0&&(U.forEach(function(F){j.releaseProgram(F)}),M.isShaderMaterial&&j.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,F,O,N,et){U===null&&(U=Nt);const rt=N.isMesh&&N.matrixWorld.determinant()<0,ft=gc(M,U,F,O,N);vt.setMaterial(O,rt);let pt=F.index,bt=1;if(O.wireframe===!0){if(pt=$.getWireframeAttribute(F),pt===void 0)return;bt=2}const wt=F.drawRange,yt=F.attributes.position;let Xt=wt.start*bt,ce=(wt.start+wt.count)*bt;et!==null&&(Xt=Math.max(Xt,et.start*bt),ce=Math.min(ce,(et.start+et.count)*bt)),pt!==null?(Xt=Math.max(Xt,0),ce=Math.min(ce,pt.count)):yt!=null&&(Xt=Math.max(Xt,0),ce=Math.min(ce,yt.count));const he=ce-Xt;if(he<0||he===1/0)return;Ft.setup(N,O,ft,F,pt);let ze,qt=Tt;if(pt!==null&&(ze=B.get(pt),qt=ht,qt.setIndex(ze)),N.isMesh)O.wireframe===!0?(vt.setLineWidth(O.wireframeLinewidth*le()),qt.setMode(C.LINES)):qt.setMode(C.TRIANGLES);else if(N.isLine){let _t=O.linewidth;_t===void 0&&(_t=1),vt.setLineWidth(_t*le()),N.isLineSegments?qt.setMode(C.LINES):N.isLineLoop?qt.setMode(C.LINE_LOOP):qt.setMode(C.LINE_STRIP)}else N.isPoints?qt.setMode(C.POINTS):N.isSprite&&qt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const _t=N._multiDrawStarts,we=N._multiDrawCounts,Kt=N._multiDrawCount,je=pt?B.get(pt).bytesPerElement:1,ni=At.get(O).currentProgram.getUniforms();for(let He=0;He<Kt;He++)ni.setValue(C,"_gl_DrawID",He),qt.render(_t[He]/je,we[He])}else if(N.isInstancedMesh)qt.renderInstances(Xt,he,N.count);else if(F.isInstancedBufferGeometry){const _t=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,we=Math.min(F.instanceCount,_t);qt.renderInstances(Xt,he,we)}else qt.render(Xt,he)};function be(M,U,F){M.transparent===!0&&M.side===Qe&&M.forceSinglePass===!1?(M.side=Ue,M.needsUpdate=!0,rs(M,U,F),M.side=Un,M.needsUpdate=!0,rs(M,U,F),M.side=Qe):rs(M,U,F)}this.compile=function(M,U,F=null){F===null&&(F=M),m=lt.get(F),m.init(U),S.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const O=new Set;return M.traverse(function(N){const et=N.material;if(et)if(Array.isArray(et))for(let rt=0;rt<et.length;rt++){const ft=et[rt];be(ft,F,N),O.add(ft)}else be(et,F,N),O.add(et)}),S.pop(),m=null,O},this.compileAsync=function(M,U,F=null){const O=this.compile(M,U,F);return new Promise(N=>{function et(){if(O.forEach(function(rt){At.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){N(M);return}setTimeout(et,10)}Yt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Wt=null;function hn(M){Wt&&Wt(M)}function rn(){On.stop()}function io(){On.start()}const On=new $l;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(M){Wt=M,tt.setAnimationLoop(M),M===null?On.stop():On.start()},tt.addEventListener("sessionstart",rn),tt.addEventListener("sessionend",io),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,A),m=lt.get(M,S.length),m.init(U),S.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(dt),J=this.localClippingEnabled,W=Dt.init(this.clippingPlanes,J),_=st.get(M,f.length),_.init(),f.push(_),tt.enabled===!0&&tt.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&ur(et,U,-1/0,y.sortObjects)}ur(M,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,ct),kt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,kt&&at.addToRenderList(_,M),this.info.render.frame++,W===!0&&Dt.beginShadows();const F=m.state.shadowsArray;Q.render(F,M,U),W===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let rt=0,ft=et.length;rt<ft;rt++){const pt=et[rt];ro(O,N,M,pt)}kt&&at.render(M);for(let rt=0,ft=et.length;rt<ft;rt++){const pt=et[rt];so(_,M,pt,pt.viewport)}}else N.length>0&&ro(O,N,M,U),kt&&at.render(M),so(_,M,U);A!==null&&(Lt.updateMultisampleRenderTarget(A),Lt.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,U),Ft.resetDefaultState(),I=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],W===!0&&Dt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ur(M,U,F,O){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$t.intersectsSprite(M)){O&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const rt=Z.update(M),ft=M.material;ft.visible&&_.push(M,rt,ft,F,Pt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$t.intersectsObject(M))){const rt=Z.update(M),ft=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Pt.copy(rt.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(ft)){const pt=rt.groups;for(let bt=0,wt=pt.length;bt<wt;bt++){const yt=pt[bt],Xt=ft[yt.materialIndex];Xt&&Xt.visible&&_.push(M,rt,Xt,F,Pt.z,yt)}}else ft.visible&&_.push(M,rt,ft,F,Pt.z,null)}}const et=M.children;for(let rt=0,ft=et.length;rt<ft;rt++)ur(et[rt],U,F,O)}function so(M,U,F,O){const N=M.opaque,et=M.transmissive,rt=M.transparent;m.setupLightsView(F),W===!0&&Dt.setGlobalState(y.clippingPlanes,F),O&&vt.viewport(v.copy(O)),N.length>0&&ss(N,U,F),et.length>0&&ss(et,U,F),rt.length>0&&ss(rt,U,F),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ro(M,U,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Qn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?ts:yn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=m.state.transmissionRenderTarget[O.id],rt=O.viewport||v;et.setSize(rt.z,rt.w);const ft=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(k),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),kt?at.render(F):y.clear();const pt=y.toneMapping;y.toneMapping=In;const bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),W===!0&&Dt.setGlobalState(y.clippingPlanes,O),ss(M,F,O),Lt.updateMultisampleRenderTarget(et),Lt.updateRenderTargetMipmap(et),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,Xt=U.length;yt<Xt;yt++){const ce=U[yt],he=ce.object,ze=ce.geometry,qt=ce.material,_t=ce.group;if(qt.side===Qe&&he.layers.test(O.layers)){const we=qt.side;qt.side=Ue,qt.needsUpdate=!0,ao(he,F,O,ze,qt,_t),qt.side=we,qt.needsUpdate=!0,wt=!0}}wt===!0&&(Lt.updateMultisampleRenderTarget(et),Lt.updateRenderTargetMipmap(et))}y.setRenderTarget(ft),y.setClearColor(k,V),bt!==void 0&&(O.viewport=bt),y.toneMapping=pt}function ss(M,U,F){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=M.length;N<et;N++){const rt=M[N],ft=rt.object,pt=rt.geometry,bt=O===null?rt.material:O,wt=rt.group;ft.layers.test(F.layers)&&ao(ft,U,F,pt,bt,wt)}}function ao(M,U,F,O,N,et){M.onBeforeRender(y,U,F,O,N,et),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.transparent===!0&&N.side===Qe&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,y.renderBufferDirect(F,U,O,N,M,et),N.side=Un,N.needsUpdate=!0,y.renderBufferDirect(F,U,O,N,M,et),N.side=Qe):y.renderBufferDirect(F,U,O,N,M,et),M.onAfterRender(y,U,F,O,N,et)}function rs(M,U,F){U.isScene!==!0&&(U=Nt);const O=At.get(M),N=m.state.lights,et=m.state.shadowsArray,rt=N.state.version,ft=j.getParameters(M,N.state,et,U,F),pt=j.getProgramCacheKey(ft);let bt=O.programs;O.environment=M.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(M.isMeshStandardMaterial?x:T).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",Et),bt=new Map,O.programs=bt);let wt=bt.get(pt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===rt)return lo(M,ft),wt}else ft.uniforms=j.getUniforms(M),M.onBeforeCompile(ft,y),wt=j.acquireProgram(ft,pt),bt.set(pt,wt),O.uniforms=ft.uniforms;const yt=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=Dt.uniform),lo(M,ft),O.needsLights=vc(M),O.lightsStateVersion=rt,O.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function oo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Vs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function lo(M,U){const F=At.get(M);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function gc(M,U,F,O,N){U.isScene!==!0&&(U=Nt),Lt.resetTextureUnits();const et=U.fog,rt=O.isMeshStandardMaterial?U.environment:null,ft=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fn,pt=(O.isMeshStandardMaterial?x:T).get(O.envMap||rt),bt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ce=!!F.morphAttributes.color;let he=In;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(he=y.toneMapping);const ze=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,qt=ze!==void 0?ze.length:0,_t=At.get(O),we=m.state.lights;if(W===!0&&(J===!0||M!==E)){const We=M===E&&O.id===I;Dt.setState(O,M,We)}let Kt=!1;O.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==we.state.version||_t.outputColorSpace!==ft||N.isBatchedMesh&&_t.batching===!1||!N.isBatchedMesh&&_t.batching===!0||N.isBatchedMesh&&_t.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&_t.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&_t.instancing===!1||!N.isInstancedMesh&&_t.instancing===!0||N.isSkinnedMesh&&_t.skinning===!1||!N.isSkinnedMesh&&_t.skinning===!0||N.isInstancedMesh&&_t.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&_t.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&_t.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&_t.instancingMorph===!1&&N.morphTexture!==null||_t.envMap!==pt||O.fog===!0&&_t.fog!==et||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Dt.numPlanes||_t.numIntersection!==Dt.numIntersection)||_t.vertexAlphas!==bt||_t.vertexTangents!==wt||_t.morphTargets!==yt||_t.morphNormals!==Xt||_t.morphColors!==ce||_t.toneMapping!==he||_t.morphTargetsCount!==qt)&&(Kt=!0):(Kt=!0,_t.__version=O.version);let je=_t.currentProgram;Kt===!0&&(je=rs(O,U,N));let ni=!1,He=!1,dr=!1;const ge=je.getUniforms(),Sn=_t.uniforms;if(vt.useProgram(je.program)&&(ni=!0,He=!0,dr=!0),O.id!==I&&(I=O.id,He=!0),ni||E!==M){ge.setValue(C,"projectionMatrix",M.projectionMatrix),ge.setValue(C,"viewMatrix",M.matrixWorldInverse);const We=ge.map.cameraPosition;We!==void 0&&We.setValue(C,ot.setFromMatrixPosition(M.matrixWorld)),Zt.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ge.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,He=!0,dr=!0)}if(N.isSkinnedMesh){ge.setOptional(C,N,"bindMatrix"),ge.setOptional(C,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ge.setValue(C,"boneTexture",We.boneTexture,Lt))}N.isBatchedMesh&&(ge.setOptional(C,N,"batchingTexture"),ge.setValue(C,"batchingTexture",N._matricesTexture,Lt),ge.setOptional(C,N,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",N._indirectTexture,Lt),ge.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",N._colorsTexture,Lt));const fr=F.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Gt.update(N,F,je),(He||_t.receiveShadow!==N.receiveShadow)&&(_t.receiveShadow=N.receiveShadow,ge.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Sn.envMap.value=pt,Sn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),He&&(ge.setValue(C,"toneMappingExposure",y.toneMappingExposure),_t.needsLights&&_c(Sn,dr),et&&O.fog===!0&&xt.refreshFogUniforms(Sn,et),xt.refreshMaterialUniforms(Sn,O,Y,G,m.state.transmissionRenderTarget[M.id]),Vs.upload(C,oo(_t),Sn,Lt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Vs.upload(C,oo(_t),Sn,Lt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ge.setValue(C,"center",N.center),ge.setValue(C,"modelViewMatrix",N.modelViewMatrix),ge.setValue(C,"normalMatrix",N.normalMatrix),ge.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const We=O.uniformsGroups;for(let pr=0,xc=We.length;pr<xc;pr++){const co=We[pr];ae.update(co,je),ae.bind(co,je)}}return je}function _c(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function vc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,F){At.get(M.texture).__webglTexture=U,At.get(M.depthTexture).__webglTexture=F;const O=At.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const F=At.get(M);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,F=0){A=M,D=U,w=F;let O=!0,N=null,et=!1,rt=!1;if(M){const pt=At.get(M);pt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(C.FRAMEBUFFER,null),O=!1):pt.__webglFramebuffer===void 0?Lt.setupRenderTarget(M):pt.__hasExternalTextures&&Lt.rebindTextures(M,At.get(M.texture).__webglTexture,At.get(M.depthTexture).__webglTexture);const bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(rt=!0);const wt=At.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?N=wt[U][F]:N=wt[U],et=!0):M.samples>0&&Lt.useMultisampledRTT(M)===!1?N=At.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[F]:N=wt,v.copy(M.viewport),P.copy(M.scissor),z=M.scissorTest}else v.copy(mt).multiplyScalar(Y).floor(),P.copy(gt).multiplyScalar(Y).floor(),z=Ht;if(vt.bindFramebuffer(C.FRAMEBUFFER,N)&&O&&vt.drawBuffers(M,N),vt.viewport(v),vt.scissor(P),vt.setScissorTest(z),et){const pt=At.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,F)}else if(rt){const pt=At.get(M.texture),bt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,pt.__webglTexture,F||0,bt)}I=-1},this.readRenderTargetPixels=function(M,U,F,O,N,et,rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(ft=ft[rt]),ft){vt.bindFramebuffer(C.FRAMEBUFFER,ft);try{const pt=M.texture,bt=pt.format,wt=pt.type;if(!Zt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-O&&F>=0&&F<=M.height-N&&C.readPixels(U,F,O,N,Rt.convert(bt),Rt.convert(wt),et)}finally{const pt=A!==null?At.get(A).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(M,U,F,O,N,et,rt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(ft=ft[rt]),ft){vt.bindFramebuffer(C.FRAMEBUFFER,ft);try{const pt=M.texture,bt=pt.format,wt=pt.type;if(!Zt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-O&&F>=0&&F<=M.height-N){const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,et.byteLength,C.STREAM_READ),C.readPixels(U,F,O,N,Rt.convert(bt),Rt.convert(wt),0),C.flush();const Xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await gh(C,Xt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,et)}finally{C.deleteBuffer(yt),C.deleteSync(Xt)}return et}}finally{const pt=A!==null?At.get(A).__webglFramebuffer:null;vt.bindFramebuffer(C.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(M,U=null,F=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(M.image.width*O),et=Math.floor(M.image.height*O),rt=U!==null?U.x:0,ft=U!==null?U.y:0;Lt.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,rt,ft,N,et),vt.unbindTexture()},this.copyTextureToTexture=function(M,U,F=null,O=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let et,rt,ft,pt,bt,wt;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,ft=F.min.x,pt=F.min.y):(et=M.image.width,rt=M.image.height,ft=0,pt=0),O!==null?(bt=O.x,wt=O.y):(bt=0,wt=0);const yt=Rt.convert(U.format),Xt=Rt.convert(U.type);Lt.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ze=C.getParameter(C.UNPACK_SKIP_PIXELS),qt=C.getParameter(C.UNPACK_SKIP_ROWS),_t=C.getParameter(C.UNPACK_SKIP_IMAGES),we=M.isCompressedTexture?M.mipmaps[N]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,pt),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,bt,wt,et,rt,yt,Xt,we.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,bt,wt,we.width,we.height,yt,we.data):C.texSubImage2D(C.TEXTURE_2D,N,bt,wt,et,rt,yt,Xt,we),C.pixelStorei(C.UNPACK_ROW_LENGTH,ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,qt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_t),N===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,F=null,O=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0);let et,rt,ft,pt,bt,wt,yt,Xt,ce;const he=M.isCompressedTexture?M.mipmaps[N]:M.image;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,ft=F.max.z-F.min.z,pt=F.min.x,bt=F.min.y,wt=F.min.z):(et=he.width,rt=he.height,ft=he.depth,pt=0,bt=0,wt=0),O!==null?(yt=O.x,Xt=O.y,ce=O.z):(yt=0,Xt=0,ce=0);const ze=Rt.convert(U.format),qt=Rt.convert(U.type);let _t;if(U.isData3DTexture)Lt.setTexture3D(U,0),_t=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Lt.setTexture2DArray(U,0),_t=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const we=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),je=C.getParameter(C.UNPACK_SKIP_PIXELS),ni=C.getParameter(C.UNPACK_SKIP_ROWS),He=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,he.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wt),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(_t,N,yt,Xt,ce,et,rt,ft,ze,qt,he.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(_t,N,yt,Xt,ce,et,rt,ft,ze,he.data):C.texSubImage3D(_t,N,yt,Xt,ce,et,rt,ft,ze,qt,he),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,ni),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He),N===0&&U.generateMipmaps&&C.generateMipmap(_t),vt.unbindTexture()},this.initRenderTarget=function(M){At.get(M).__webglFramebuffer===void 0&&Lt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Lt.setTextureCube(M,0):M.isData3DTexture?Lt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Lt.setTexture2DArray(M,0):Lt.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){D=0,w=0,A=null,vt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xa?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===ar?"display-p3":"srgb"}}class Za{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ja extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qa("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new R;class $s{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nc extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const Wi=new R,Mi=new R,Si=new R,Ei=new St,Xi=new St,ic=new te,Rs=new R,qi=new R,Cs=new R,rl=new St,Vr=new St,al=new St;class Am extends xe{constructor(t=new nc){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tm(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new $s(n,3,0,!1)),yi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=yi,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),ic.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ps(Rs.set(-.5,-.5,0),Si,a,Mi,s,r),Ps(qi.set(.5,-.5,0),Si,a,Mi,s,r),Ps(Cs.set(.5,.5,0),Si,a,Mi,s,r),rl.set(0,0),Vr.set(1,0),al.set(1,1);let o=t.ray.intersectTriangle(Rs,qi,Cs,!1,Wi);if(o===null&&(Ps(qi.set(-.5,.5,0),Si,a,Mi,s,r),Vr.set(0,1),o=t.ray.intersectTriangle(Rs,Cs,qi,!1,Wi),o===null))return;const l=t.ray.origin.distanceTo(Wi);l<t.near||l>t.far||e.push({distance:l,point:Wi.clone(),uv:en.getInterpolation(Wi,Rs,qi,Cs,rl,Vr,al,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ps(i,t,e,n,s,r){Ei.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Xi.x=r*Ei.x-s*Ei.y,Xi.y=s*Ei.x+r*Ei.y):Xi.copy(Ei),i.copy(t),i.x+=Xi.x,i.y+=Xi.y,i.applyMatrix4(ic)}class Rm extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zs=new R,Js=new R,ol=new te,Ki=new Ka,Ls=new ns,Wr=new R,ll=new R;class Cm extends xe{constructor(t=new oe,e=new Rm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zs.fromBufferAttribute(e,s-1),Js.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zs.distanceTo(Js);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,t.ray.intersectsSphere(Ls)===!1)return;ol.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),S=h.getX(_+1),y=Is(this,t,Ki,l,f,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Is(this,t,Ki,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Is(this,t,Ki,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Is(this,t,Ki,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Is(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Zs.fromBufferAttribute(a,s),Js.fromBufferAttribute(a,r),e.distanceSqToSegment(Zs,Js,Wr,ll)>n)return;Wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wr);if(!(l<t.near||l>t.far))return{distance:l,point:ll.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}class Qs extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cl=new te,Ia=new Ka,Ds=new ns,Us=new R;class tr extends xe{constructor(t=new oe,e=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;cl.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(cl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Us.fromBufferAttribute(u,m),hl(Us,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Us.fromBufferAttribute(u,g),hl(Us,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hl(i,t,e,n,s,r,a){const o=Ia.distanceSqToPoint(i);if(o<e){const l=new R;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Pm extends Ce{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni extends oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function S(){const b=new R,D=new R;let w=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const E=[],v=I/r,P=v*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,V=k*l+o,q=Math.sin(V),G=Math.cos(V);D.x=P*q,D.y=-v*n+m,D.z=P*G,u.push(D.x,D.y,D.z),b.set(q,A,G).normalize(),d.push(b.x,b.y,b.z),p.push(k,1-v),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const v=_[E][I],P=_[E+1][I],z=_[E+1][I+1],k=_[E][I+1];h.push(v,P,k),h.push(P,z,k),w+=6}c.addGroup(f,w,0),f+=w}function y(b){const D=g,w=new St,A=new R;let I=0;const E=b===!0?t:e,v=b===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const V=z/s*l+o,q=Math.cos(V),G=Math.sin(V);A.x=E*G,A.y=m*v,A.z=E*q,u.push(A.x,A.y,A.z),d.push(0,v,0),w.x=q*.5+.5,w.y=G*.5*v+.5,p.push(w.x,w.y),g++}for(let z=0;z<s;z++){const k=D+z,V=P+z;b===!0?h.push(V,V+1,k):h.push(V+1,V,k),I+=3}c.addGroup(f,I,b===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fi extends Ni{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new R,b=new R,D=new R;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],b),p(e[w+2],D),l(y,b,D,S)}function l(S,y,b,D){const w=D+1,A=[];for(let I=0;I<=w;I++){A[I]=[];const E=S.clone().lerp(b,I/w),v=y.clone().lerp(b,I/w),P=w-I;for(let z=0;z<=P;z++)z===0&&I===w?A[I][z]=E:A[I][z]=E.clone().lerp(v,z/P)}for(let I=0;I<w;I++)for(let E=0;E<2*(w-I)-1;E++){const v=Math.floor(E/2);E%2===0?(d(A[I][v+1]),d(A[I+1][v]),d(A[I][v])):(d(A[I][v+1]),d(A[I+1][v+1]),d(A[I+1][v]))}}function c(S){const y=new R;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(S),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const S=new R;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const b=m(S)/2/Math.PI+.5,D=f(S)/Math.PI+.5;a.push(b,1-D)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const y=a[S+0],b=a[S+2],D=a[S+4],w=Math.max(y,b,D),A=Math.min(y,b,D);w>.9&&A<.1&&(y<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,y){const b=S*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const S=new R,y=new R,b=new R,D=new R,w=new St,A=new St,I=new St;for(let E=0,v=0;E<r.length;E+=9,v+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),w.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),D.copy(S).add(y).add(b).divideScalar(3);const P=m(D);_(w,v+0,S,P),_(A,v+2,y,P),_(I,v+4,b,P)}}function _(S,y,b,D){D<0&&S.x===1&&(a[y]=S.x-1),b.x===0&&b.z===0&&(a[y]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.vertices,t.indices,t.radius,t.details)}}class Qa extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qa(t.radius,t.detail)}}class er extends lr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new er(t.radius,t.detail)}}class nr extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new R,g=new St;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const S=f+m,y=S,b=S+n+1,D=S+n+2,w=S+1;o.push(y,b,w),o.push(b,D,w)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class De extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],y=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){const w=D/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+b,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const y=h[f][S+1],b=h[f][S],D=h[f+1][S],w=h[f+1][S+1];(f!==0||a>0)&&p.push(y,b,w),(f!==n-1||l<Math.PI)&&p.push(b,D,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yi extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ul={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lm{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Im=new Lm;class to{constructor(t){this.manager=t!==void 0?t:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";class Dm extends to{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ul.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Qi("img");function l(){h(),ul.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Um extends to{constructor(t){super(t)}load(t,e,n,s){const r=new Ce,a=new Dm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class eo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Xr=new te,dl=new R,fl=new R;class sc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pl=new te,ji=new R,qr=new R;class Nm extends sc{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(ji),qr.copy(n.position),qr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qr),n.updateMatrixWorld(),s.makeTranslation(-ji.x,-ji.y,-ji.z),pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl)}}class Fm extends eo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Om extends sc{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rc extends eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);const ve=1495978707e-1,ue=94607304725808e-1,Bt=695700,ut=(i,t,e)=>({ra:i,dec:t,distKm:e*ue}),Ci=[{id:"sun",name:"Sun",kind:"sun",group:"solar",radiusKm:Bt,color:16774080,distKm:0,ra:0,dec:0,rotationHrs:609.12,type:"G2V main-sequence star",mass:"1.989 × 10³⁰ kg (333,000 Earths)",temp:"5,772 K surface / 15.7 million K core",fact:"Contains 99.86% of the solar system's mass. Light from its surface takes 8 min 20 s to reach Earth.",kidFact:"The Sun is a giant ball of glowing gas! A million Earths could fit inside it!",emoji:"☀️"},{id:"mercury",name:"Mercury",kind:"planet",group:"solar",radiusKm:2439.7,color:10260098,rotationHrs:1407.6,orbit:{a:.38709927,e:.20563593,i:7.00497902,L:252.2503235,peri:77.45779628,node:48.33076593,da:37e-8,de:1906e-8,di:-.00594749,dL:149472.67411175,dperi:.16047689,dnode:-.12534081},type:"Rocky planet",mass:"3.30 × 10²³ kg",temp:"−173 °C to +427 °C",fact:"Smallest planet; a year lasts 88 Earth days but one solar day lasts 176 Earth days.",kidFact:"Mercury is the smallest planet and the fastest — it zooms around the Sun in just 88 days!",emoji:"🪨"},{id:"venus",name:"Venus",kind:"planet",group:"solar",radiusKm:6051.8,color:15124623,rotationHrs:-5832.5,orbit:{a:.72333566,e:.00677672,i:3.39467605,L:181.9790995,peri:131.60246718,node:76.67984255,da:39e-7,de:-4107e-8,di:-7889e-7,dL:58517.81538729,dperi:.00268329,dnode:-.27769418},type:"Rocky planet",mass:"4.87 × 10²⁴ kg",temp:"464 °C surface (hottest planet)",fact:"Crushing 92-bar CO₂ atmosphere and a runaway greenhouse effect make it hotter than Mercury. It spins backwards.",kidFact:"Venus is the hottest planet — hot enough to melt a toy truck! And it spins the wrong way!",emoji:"🌕"},{id:"earth",name:"Earth",kind:"planet",group:"solar",radiusKm:6371,color:4882388,rotationHrs:23.934,orbit:{a:1.00000261,e:.01671123,i:-1531e-8,L:100.46457166,peri:102.93768193,node:0,da:562e-8,de:-4392e-8,di:-.01294668,dL:35999.37244981,dperi:.32327364,dnode:0},type:"Rocky planet — home",mass:"5.97 × 10²⁴ kg",temp:"15 °C average",fact:"The only place in the universe known to host life. 71% of the surface is ocean.",kidFact:"This is home! Earth is the only place we know with animals, oceans, and YOU!",emoji:"🌍"},{id:"mars",name:"Mars",kind:"planet",group:"solar",radiusKm:3389.5,color:12673339,rotationHrs:24.62,orbit:{a:1.52371034,e:.0933941,i:1.84969142,L:-4.55343205,peri:-23.94362959,node:49.55953891,da:1847e-8,de:7882e-8,di:-.00813131,dL:19140.30268499,dperi:.44441088,dnode:-.29257343},type:"Rocky planet",mass:"6.42 × 10²³ kg",temp:"−63 °C average",fact:"Home to Olympus Mons (21.9 km, tallest volcano known) and Valles Marineris, a canyon as long as the USA.",kidFact:"Mars is the red planet! It has the biggest volcano in the whole solar system!",emoji:"🔴"},{id:"jupiter",name:"Jupiter",kind:"planet",group:"solar",radiusKm:69911,color:13215625,rotationHrs:9.925,orbit:{a:5.202887,e:.04838624,i:1.30439695,L:34.39644051,peri:14.72847983,node:100.47390909,da:-11607e-8,de:-13253e-8,di:-.00183714,dL:3034.74612775,dperi:.21252668,dnode:.20469106},type:"Gas giant",mass:"1.90 × 10²⁷ kg (318 Earths)",temp:"−108 °C cloud tops",fact:"More than twice as massive as all other planets combined. The Great Red Spot is a storm larger than Earth, raging for centuries.",kidFact:"Jupiter is the KING of planets — 1,300 Earths could fit inside! Its big red spot is a giant storm!",emoji:"🟠"},{id:"saturn",name:"Saturn",kind:"planet",group:"solar",radiusKm:58232,color:14270602,rotationHrs:10.656,ring:{inner:1.24,outer:2.27,color:13351047},orbit:{a:9.53667594,e:.05386179,i:2.48599187,L:49.95424423,peri:92.59887831,node:113.66242448,da:-.0012506,de:-50991e-8,di:.00193609,dL:1222.49362201,dperi:-.41897216,dnode:-.28867794},type:"Gas giant",mass:"5.68 × 10²⁶ kg",temp:"−139 °C cloud tops",fact:"Its rings span 282,000 km yet average only ~10 m thick — mostly water-ice chunks from dust-size to house-size.",kidFact:"Saturn has beautiful rings made of billions of pieces of ice — like a hula hoop of snowballs!",emoji:"🪐"},{id:"uranus",name:"Uranus",kind:"planet",group:"solar",radiusKm:25362,color:10474713,rotationHrs:-17.24,orbit:{a:19.18916464,e:.04725744,i:.77263783,L:313.23810451,peri:170.9542763,node:74.01692503,da:-.00196176,de:-4397e-8,di:-.00242939,dL:428.48202785,dperi:.40805281,dnode:.04240589},type:"Ice giant",mass:"8.68 × 10²⁵ kg",temp:"−224 °C (coldest atmosphere)",fact:"Rolls around the Sun on its side — its axis is tilted 98°, likely from an ancient giant impact.",kidFact:"Uranus rolls around the Sun on its side, like a ball rolling on the floor!",emoji:"🔵"},{id:"neptune",name:"Neptune",kind:"planet",group:"solar",radiusKm:24622,color:4613849,rotationHrs:16.11,orbit:{a:30.06992276,e:.00859048,i:1.77004347,L:-55.12002969,peri:44.96476227,node:131.78422574,da:26291e-8,de:5105e-8,di:35372e-8,dL:218.45945325,dperi:-.32241464,dnode:-.00508664},type:"Ice giant",mass:"1.02 × 10²⁶ kg",temp:"−201 °C",fact:"Has the fastest winds measured on any planet — up to 2,100 km/h. Found by mathematics before telescopes saw it (1846).",kidFact:"Neptune is the windiest planet — its winds blow faster than a jet plane!",emoji:"💙"},{id:"pluto",name:"Pluto",kind:"dwarf",group:"solar",radiusKm:1188.3,color:12887426,rotationHrs:-153.3,orbit:{a:39.48211675,e:.2488273,i:17.14001206,L:238.92903833,peri:224.06891629,node:110.30393684,da:-31596e-8,de:517e-7,di:4818e-8,dL:145.20780515,dperi:-.04062942,dnode:-.01183482},type:"Dwarf planet (Kuiper belt)",mass:"1.31 × 10²² kg",temp:"−229 °C",fact:"Has a heart-shaped nitrogen-ice glacier (Sputnik Planitia) and five moons. New Horizons flew past in 2015.",kidFact:"Pluto is a tiny ice world with a giant heart shape on it — a heart made of ice!",emoji:"🤍"},{id:"ceres",name:"Ceres",kind:"dwarf",group:"solar",radiusKm:469.7,color:9407104,orbit:{a:2.7658,e:.0785,i:10.59,L:95.99,peri:73.6,node:80.3},type:"Dwarf planet (asteroid belt)",mass:"9.38 × 10²⁰ kg",fact:"Largest object in the asteroid belt — a third of the belt's entire mass. Has bright salt deposits in Occator crater.",kidFact:"Ceres is a little round world living in the asteroid belt with sparkly salty spots!",emoji:"⚪"},{id:"eris",name:"Eris",kind:"dwarf",group:"solar",radiusKm:1163,color:14210252,orbit:{a:67.86,e:.4361,i:44.04,L:205,peri:187.2,node:35.95},type:"Dwarf planet (scattered disc)",mass:"1.66 × 10²² kg",fact:'More massive than Pluto — its discovery in 2005 triggered the "dwarf planet" definition. Takes 559 years to orbit.',kidFact:"Eris is so far away, one trip around the Sun takes over 500 years!",emoji:"❄️"},{id:"makemake",name:"Makemake",kind:"dwarf",group:"solar",radiusKm:715,color:13212280,orbit:{a:45.43,e:.161,i:28.98,L:165.5,peri:296.5,node:79.6},type:"Dwarf planet (Kuiper belt)",fact:"A reddish Kuiper-belt world named for the creator god of Rapa Nui (Easter Island).",kidFact:"Makemake is a little red frozen world far past Pluto!",emoji:"🟤"},{id:"haumea",name:"Haumea",kind:"dwarf",group:"solar",radiusKm:780,color:14342356,orbit:{a:43.12,e:.196,i:28.21,L:240.2,peri:240.6,node:122.2},type:"Dwarf planet (Kuiper belt)",fact:"Spins so fast (every 3.9 h) it's stretched into an egg shape, and it has its own ring.",kidFact:"Haumea spins so fast it got squished into an egg shape!",emoji:"🥚"},{id:"sedna",name:"Sedna",kind:"dwarf",group:"solar",radiusKm:500,color:12082248,orbit:{a:506,e:.855,i:11.93,L:358,peri:311.3,node:144.2},type:"Detached trans-Neptunian object",fact:"One of the most distant known solar-system bodies — its stretched 11,400-year orbit reaches 937 AU from the Sun.",kidFact:"Sedna is SO far away that one of its years lasts more than 11,000 of ours!",emoji:"🧊"},{id:"moon",name:"Moon",kind:"moon",group:"solar",parent:"earth",moonAKm:384400,moonPdays:27.322,radiusKm:1737.4,color:12105904,type:"Earth's moon",mass:"7.35 × 10²² kg",fact:"The only other world humans have walked on (12 people, 1969–1972). It drifts 3.8 cm farther from Earth each year.",kidFact:"The Moon! Astronauts walked here and left footprints that are still there!",emoji:"🌙"},{id:"phobos",name:"Phobos",kind:"moon",group:"solar",parent:"mars",moonAKm:9376,moonPdays:.319,radiusKm:11.3,color:9076082,type:"Moon of Mars",fact:"Orbits Mars faster than Mars rotates, and is slowly spiralling in — doomed to break apart in ~50 million years."},{id:"deimos",name:"Deimos",kind:"moon",group:"solar",parent:"mars",moonAKm:23463,moonPdays:1.263,radiusKm:6.2,color:10128768,type:"Moon of Mars",fact:"Mars's smaller outer moon — from the surface of Mars it looks like a bright star."},{id:"io",name:"Io",kind:"moon",group:"solar",parent:"jupiter",moonAKm:421800,moonPdays:1.769,radiusKm:1821.6,color:14271066,type:"Moon of Jupiter",fact:"The most volcanically active body in the solar system — hundreds of volcanoes, some erupting 400 km high.",kidFact:"Io is covered in volcanoes — it looks like a pizza!",emoji:"🍕"},{id:"europa",name:"Europa",kind:"moon",group:"solar",parent:"jupiter",moonAKm:671100,moonPdays:3.551,radiusKm:1560.8,color:13089188,type:"Moon of Jupiter",fact:"Beneath its cracked ice shell lies a salty ocean with more water than all Earth's oceans — a top target in the search for life.",kidFact:"Europa has a secret ocean hiding under the ice — maybe fish-aliens? Nobody knows yet!",emoji:"🧊"},{id:"ganymede",name:"Ganymede",kind:"moon",group:"solar",parent:"jupiter",moonAKm:1070400,moonPdays:7.155,radiusKm:2634.1,color:10130314,type:"Moon of Jupiter",fact:"The largest moon in the solar system — bigger than the planet Mercury — and the only moon with its own magnetic field."},{id:"callisto",name:"Callisto",kind:"moon",group:"solar",parent:"jupiter",moonAKm:1882700,moonPdays:16.689,radiusKm:2410.3,color:8222318,type:"Moon of Jupiter",fact:"The most heavily cratered world known — its surface is ~4 billion years old."},{id:"titan",name:"Titan",kind:"moon",group:"solar",parent:"saturn",moonAKm:1221870,moonPdays:15.945,radiusKm:2574.7,color:13935439,type:"Moon of Saturn",fact:"The only moon with a thick atmosphere, plus rivers and seas of liquid methane. NASA's Dragonfly drone launches to it this decade.",kidFact:"Titan has orange air and lakes — but the lakes aren't water, they're super-cold natural gas!",emoji:"🟧"},{id:"enceladus",name:"Enceladus",kind:"moon",group:"solar",parent:"saturn",moonAKm:238040,moonPdays:1.37,radiusKm:252.1,color:15265520,type:"Moon of Saturn",fact:"Shoots geysers of ocean water from its south pole into space — Cassini flew through them and tasted salt and organics.",kidFact:"Enceladus is a snowball moon that squirts water fountains into space!",emoji:"⛲"},{id:"mimas",name:"Mimas",kind:"moon",group:"solar",parent:"saturn",moonAKm:185540,moonPdays:.942,radiusKm:198.2,color:11908528,type:"Moon of Saturn",fact:"Its giant Herschel crater makes it look like the Death Star. Recent evidence suggests a young hidden ocean."},{id:"iapetus",name:"Iapetus",kind:"moon",group:"solar",parent:"saturn",moonAKm:3560820,moonPdays:79.32,radiusKm:734.5,color:10129277,type:"Moon of Saturn",fact:"Two-faced: one hemisphere is coal-black, the other bright ice. A mysterious 13-km-high ridge runs along its equator."},{id:"titania",name:"Titania",kind:"moon",group:"solar",parent:"uranus",moonAKm:435910,moonPdays:8.706,radiusKm:788.4,color:10328466,type:"Moon of Uranus",fact:"The largest moon of Uranus, seen up close only once — by Voyager 2 in 1986."},{id:"triton",name:"Triton",kind:"moon",group:"solar",parent:"neptune",moonAKm:354759,moonPdays:-5.877,radiusKm:1353.4,color:13221812,type:"Moon of Neptune",fact:"Orbits backwards — it's a captured Kuiper-belt world (like Pluto) with nitrogen geysers, slowly spiralling toward destruction."},{id:"charon",name:"Charon",kind:"moon",group:"solar",parent:"pluto",moonAKm:19591,moonPdays:6.387,radiusKm:606,color:10130576,type:"Moon of Pluto",fact:"Half the size of Pluto itself — they orbit a point between them, like a pair of dancers."},{id:"voyager1",name:"Voyager 1",kind:"probe",group:"solar",radiusKm:0,color:13938487,...ut(17.2,12.3,0),distKm:167.5*ve,flags:["APPROXIMATE POSITION"],type:"Interstellar space probe (launched 1977)",fact:"The farthest human-made object — over 167 AU out, in interstellar space. Its signal takes ~23 hours to reach Earth. Carries the Golden Record.",kidFact:"Voyager 1 is a robot explorer — the farthest anything from Earth has EVER gone! It carries golden music for aliens!",emoji:"🛰️"},{id:"voyager2",name:"Voyager 2",kind:"probe",group:"solar",radiusKm:0,color:13938487,...ut(20.1,-58.9,0),distKm:139.9*ve,flags:["APPROXIMATE POSITION"],type:"Interstellar space probe (launched 1977)",fact:"The only spacecraft to visit all four giant planets. Entered interstellar space in 2018."},{id:"belt",name:"Asteroid belt",kind:"region",group:"solar",radiusKm:0,color:9077624,distKm:2.7*ve,ra:6,dec:0,flags:["REPRESENTATIVE"],type:"Region: 2.1–3.3 AU",fact:"Millions of rocky bodies, yet so spread out that spacecraft fly through without aiming. Total mass: ~3% of the Moon.",kidFact:"A ring of millions of space rocks! But they're really far apart — not crowded like in movies.",emoji:"💫"},{id:"kuiper",name:"Kuiper belt",kind:"region",group:"solar",radiusKm:0,color:8031136,distKm:40*ve,ra:12,dec:0,flags:["REPRESENTATIVE"],type:"Region: 30–50 AU",fact:"A donut of icy leftovers from the solar system's formation — home of Pluto, Makemake, Haumea, and comets."},{id:"oort",name:"Oort cloud",kind:"region",group:"solar",radiusKm:0,color:6978965,distKm:2e4*ve,ra:3,dec:20,flags:["THEORETICAL","REPRESENTATIVE"],type:"Predicted region: ~2,000–100,000 AU",fact:"A predicted vast shell of trillions of icy bodies — the source of long-period comets. Never directly observed, but strongly inferred.",kidFact:"A giant invisible bubble of sleeping comets around our whole solar system!",emoji:"🫧"},{id:"planet9",name:"Planet Nine",kind:"exhibit",group:"hypo",radiusKm:22e3,color:8035017,orbit:{a:500,e:.25,i:20,L:120,peri:150,node:100},flags:["HYPOTHETICAL"],type:"Hypothetical planet (~5–10 Earth masses)",fact:"Proposed to explain the clustered orbits of distant Kuiper-belt objects. Predicted at roughly 400–800 AU. Never observed — it may not exist. Position shown is illustrative.",kidFact:"Scientists are playing hide-and-seek with a maybe-planet way out here — nobody has found it yet!",emoji:"❓"},{id:"proxima",name:"Proxima Centauri",kind:"star",group:"stars",radiusKm:.154*Bt,color:16751983,...ut(14.495,-62.68,4.246),type:"M5.5V red dwarf — nearest star to the Sun",temp:"3,042 K",fact:"Our nearest stellar neighbour, 4.246 ly away. Hosts Proxima b, an Earth-size planet in the habitable zone. Even so, today's fastest probes would need ~75,000 years to get there.",kidFact:"The Sun's nearest neighbour star! Even a super-fast rocket would take thousands of years to visit.",emoji:"⭐"},{id:"alphacen",name:"Alpha Centauri A",kind:"star",group:"stars",radiusKm:1.22*Bt,color:16774368,...ut(14.66,-60.83,4.37),type:"G2V star (Sun's twin) in a triple system",temp:"5,790 K",fact:"The brighter member of the closest star system — almost an identical twin of our Sun, with companion Alpha Centauri B orbiting nearby."},{id:"barnard",name:"Barnard's Star",kind:"star",group:"stars",radiusKm:.196*Bt,color:16755578,...ut(17.963,4.69,5.96),type:"M4V red dwarf",fact:"Has the fastest apparent motion of any star — it crosses a Moon-width of sky every 175 years."},{id:"wolf359",name:"Wolf 359",kind:"star",group:"stars",radiusKm:.16*Bt,color:16751206,...ut(10.94,7.01,7.86),type:"M6V red dwarf",fact:"One of the faintest and smallest ordinary stars known — barely bigger than Jupiter, 100,000× dimmer than the Sun."},{id:"sirius",name:"Sirius A",kind:"star",group:"stars",radiusKm:1.711*Bt,color:14280959,...ut(6.752,-16.72,8.66),type:"A1V star — brightest in Earth's night sky",temp:"9,940 K",fact:"The brightest star in our night sky, 25× more luminous than the Sun. Ancient Egyptians timed the Nile flood by its rising.",kidFact:"Sirius is the brightest twinkle in our whole night sky — the Dog Star!",emoji:"🌟"},{id:"siriusb",name:"Sirius B",kind:"whitedwarf",group:"exotic",radiusKm:.0084*Bt,color:13623551,...ut(6.752,-16.72,8.66),type:"White dwarf — dead star core",temp:"25,000 K",mass:"1.02 solar masses",fact:"A dead star's core: the mass of the Sun crushed into a ball the size of Earth. One teaspoon weighs ~5 tonnes.",kidFact:"A whole star squeezed into a ball as small as Earth — one spoonful weighs as much as an elephant!",emoji:"💎"},{id:"epseri",name:"Epsilon Eridani",kind:"star",group:"stars",radiusKm:.735*Bt,color:16767395,...ut(3.549,-9.46,10.47),type:"K2V orange dwarf",fact:"A young nearby star with a known Jupiter-like planet and a dusty asteroid belt."},{id:"taucet",name:"Tau Ceti",kind:"star",group:"stars",radiusKm:.793*Bt,color:16771268,...ut(1.734,-15.94,11.9),type:"G8V star",fact:"The nearest single Sun-like star, with at least four candidate planets — a science-fiction favourite for centuries."},{id:"procyon",name:"Procyon",kind:"star",group:"stars",radiusKm:2.05*Bt,color:16773332,...ut(7.655,5.22,11.46),type:"F5IV subgiant",fact:"A star beginning to swell into a giant as its core hydrogen runs out — a preview of our Sun's far future."},{id:"trappist1",name:"TRAPPIST-1",kind:"star",group:"stars",radiusKm:.121*Bt,color:16747100,...ut(23.108,-5.04,40.7),type:"M8V ultra-cool dwarf with 7 planets",temp:"2,566 K",fact:"A Jupiter-sized star with SEVEN Earth-size planets, several in the habitable zone. From one planet, the others loom larger than our Moon.",kidFact:"A tiny star with seven Earth-sized planets snuggled close — imagine seven worlds in one sky!",emoji:"🪄"},{id:"vega",name:"Vega",kind:"star",group:"stars",radiusKm:2.36*Bt,color:15003135,...ut(18.616,38.78,25.04),type:"A0V star",fact:'The historical "zero point" for stellar brightness. It spins so fast it bulges — its poles are 2,000 K hotter than its equator.'},{id:"altair",name:"Altair",kind:"star",group:"stars",radiusKm:1.8*Bt,color:15659775,...ut(19.846,8.87,16.7),type:"A7V star",fact:"Spins once every 8.9 hours (the Sun takes ~25 days) — it's flattened into an egg shape."},{id:"fomalhaut",name:"Fomalhaut",kind:"star",group:"stars",radiusKm:1.84*Bt,color:15266047,...ut(22.96,-29.62,25.1),type:"A3V star",fact:'Surrounded by a spectacular dust ring imaged by Hubble and JWST — "The Eye of Sauron."'},{id:"arcturus",name:"Arcturus",kind:"star",group:"stars",radiusKm:25.4*Bt,color:16764820,...ut(14.261,19.18,36.7),type:"K1.5III red giant",fact:"The brightest star in the northern celestial hemisphere — an old star from the galaxy's thick disk, passing through our neighbourhood."},{id:"capella",name:"Capella",kind:"star",group:"stars",radiusKm:11.98*Bt,color:16773321,...ut(5.278,46,42.9),type:"G-type giant pair",fact:"Actually four stars: two giant suns orbiting each other closer than Earth orbits the Sun, plus two red dwarfs."},{id:"pollux",name:"Pollux",kind:"star",group:"stars",radiusKm:8.8*Bt,color:16767400,...ut(7.755,28.03,33.8),type:"K0III giant",fact:"The nearest giant star, with a confirmed planet — Pollux b, twice Jupiter's mass."},{id:"aldebaran",name:"Aldebaran",kind:"star",group:"stars",radiusKm:44.13*Bt,color:16758903,...ut(4.599,16.51,65.3),type:"K5III red giant",fact:"The fiery eye of Taurus the Bull — 44× the Sun's width. The Pioneer 10 probe is drifting toward it (arrival: ~2 million years)."},{id:"regulus",name:"Regulus",kind:"star",group:"stars",radiusKm:4.35*Bt,color:14477567,...ut(10.139,11.97,79.3),type:"B8IV star",fact:"Spins at 96% of its break-up speed — any faster and it would fly apart."},{id:"castor",name:"Castor",kind:"star",group:"stars",radiusKm:2.4*Bt,color:15134463,...ut(7.577,31.89,51),type:"Sextuple star system",fact:"Looks like one star; is actually SIX — three pairs all bound together in a gravitational dance."},{id:"polaris",name:"Polaris",kind:"star",group:"stars",radiusKm:37.5*Bt,color:16773849,...ut(2.53,89.26,433),type:"F7Ib supergiant — the North Star",fact:"Sits almost exactly above Earth's north pole, so the whole sky appears to wheel around it. Navigators have steered by it for millennia.",kidFact:"The North Star! It always points north — explorers used it so they never got lost!",emoji:"🧭"},{id:"spica",name:"Spica",kind:"star",group:"stars",radiusKm:7.47*Bt,color:13491711,...ut(13.42,-11.16,250),type:"B1III-IV binary",fact:"Two blue-hot stars orbiting each other every four days, so close they distort each other into egg shapes."},{id:"achernar",name:"Achernar",kind:"star",group:"stars",radiusKm:9.16*Bt,color:13952255,...ut(1.629,-57.24,139),type:"B6V star",fact:"The flattest star known — spinning so fast its equator bulges 35% wider than its poles."},{id:"canopus",name:"Canopus",kind:"star",group:"stars",radiusKm:71*Bt,color:16250088,...ut(6.4,-52.7,310),type:"A9II bright giant",fact:"The second-brightest star in the night sky, 10,000× the Sun's luminosity. Spacecraft use it as a navigation beacon."},{id:"alcyone",name:"Alcyone (Pleiades)",kind:"star",group:"stars",radiusKm:9.3*Bt,color:14280447,...ut(3.79,24.1,440),type:"B7III — brightest of the Pleiades",fact:"Leader of the Seven Sisters cluster: ~1,000 young stars born together 100 million years ago, still wrapped in wisps of blue dust.",kidFact:"The Seven Sisters — a family of baby stars all born together, still glowing blue!",emoji:"✨"},{id:"betelgeuse",name:"Betelgeuse",kind:"star",group:"stars",radiusKm:764*Bt,color:16742981,...ut(5.919,7.41,548),type:"M2Iab red supergiant",temp:"3,600 K",mass:"~17 solar masses",fact:"If placed at the Sun's position it would swallow Mercury, Venus, Earth, Mars, and Jupiter. It will explode as a supernova sometime in the next ~100,000 years — briefly outshining the full Moon.",kidFact:"Betelgeuse is a MONSTER star! If it sat where our Sun is, it would gobble up Earth AND Jupiter! One day it will go BOOM!",emoji:"💥"},{id:"antares",name:"Antares",kind:"star",group:"stars",radiusKm:680*Bt,color:16740162,...ut(16.49,-26.43,550),type:"M1.5Iab red supergiant",fact:'The "rival of Mars" — a dying red supergiant 10,000× brighter than the Sun, destined for supernova.'},{id:"rigel",name:"Rigel",kind:"star",group:"stars",radiusKm:78.9*Bt,color:13623551,...ut(5.242,-8.2,863),type:"B8Ia blue supergiant",fact:"A blue supergiant 120,000× as luminous as the Sun — the true powerhouse of Orion."},{id:"deneb",name:"Deneb",kind:"star",group:"stars",radiusKm:203*Bt,color:15265791,...ut(20.69,45.28,2615),type:"A2Ia white supergiant",fact:"One of the most luminous stars visible to the naked eye — ~200,000 Suns — shining across 2,600 light-years."},{id:"mucep",name:"Mu Cephei (Garnet Star)",kind:"star",group:"stars",radiusKm:1075*Bt,color:16735283,...ut(21.725,58.78,2840),flags:["SIZE UNCERTAIN"],type:"M2Ia red hypergiant",fact:`Herschel's "Garnet Star" — so deeply red it looks like a glowing ember, and so large its edge would reach past Jupiter.`},{id:"etacar",name:"Eta Carinae",kind:"star",group:"stars",radiusKm:240*Bt,color:14273023,...ut(10.75,-59.68,7500),type:"Luminous blue variable, ~100 M☉",fact:"One of the most massive known stars. In the 1840s it erupted so violently it briefly became the sky's second-brightest star — and it survived. Next time may be a supernova."},{id:"vycma",name:"VY Canis Majoris",kind:"star",group:"stars",radiusKm:1420*Bt,color:16737846,...ut(7.38,-25.77,3900),flags:["SIZE UNCERTAIN"],type:"M-type red hypergiant",fact:"One of the largest known stars: ~1,420 solar radii. Light takes over 6 hours just to cross its surface diameter.",kidFact:"This star is SO big that if it were a bowl, you could pour 3 billion Suns inside!",emoji:"🤯"},{id:"uyscuti",name:"UY Scuti",kind:"star",group:"stars",radiusKm:1708*Bt,color:16740416,...ut(18.46,-12.46,5900),flags:["SIZE UNCERTAIN"],type:"M4Ia red supergiant",fact:"Long listed among the largest stars known (~1,708 R☉, though estimates vary widely). Placed at the Sun, its surface would reach near Saturn."},{id:"steph218",name:"Stephenson 2-18",kind:"star",group:"stars",radiusKm:2150*Bt,color:16735278,...ut(18.66,-6.05,19e3),flags:["SIZE UNCERTAIN"],type:"Red supergiant — largest-known candidate",fact:'Possibly the largest star known: ~2,150 solar radii, meaning ~10 billion Suns could fit inside. Measurement is genuinely uncertain — it may be "only" 1,000 R☉.',kidFact:"Maybe the biggest star anyone has EVER found. Ten billion Suns could fit inside it!",emoji:"🐘"},{id:"r136a1",name:"R136a1",kind:"star",group:"stars",radiusKm:42*Bt,color:13624575,...ut(5.645,-69.1,163e3),type:"WN5h Wolf–Rayet — most massive known star",mass:"~200 solar masses",fact:"The most massive and one of the most luminous stars known (~4.6 million Suns), living in the Tarantula Nebula of the Large Magellanic Cloud."},{id:"sgra",name:"Sagittarius A*",kind:"blackhole",group:"exotic",radiusKm:1227e4,color:16757596,...ut(17.761,-29.01,26670),mass:"4.15 million solar masses",type:"Supermassive black hole — centre of our galaxy",fact:"The supermassive black hole our entire galaxy orbits. Imaged by the Event Horizon Telescope in 2022. Stars near it whip around at up to 8% of light speed. Radius shown = event horizon (~12 million km).",kidFact:"A giant black hole in the middle of our galaxy! Its gravity is SO strong that even light can't escape — that's why it's black!",emoji:"🕳️"},{id:"m87bh",name:"M87*",kind:"blackhole",group:"exotic",radiusKm:192e8,color:16751949,...ut(12.514,12.39,535e5),mass:"6.5 billion solar masses",type:"Supermassive black hole — first ever imaged",fact:"The first black hole ever photographed (Event Horizon Telescope, 2019). Its event horizon is 2.5× wider than Pluto's whole orbit, and it launches a plasma jet 5,000 light-years long.",kidFact:"The first black hole anyone ever took a picture of! It's bigger than our WHOLE solar system!",emoji:"📸"},{id:"ton618",name:"TON 618",kind:"blackhole",group:"exotic",radiusKm:195e9,color:16761963,...ut(12.514,31.29,104e8),mass:"~66 billion solar masses",type:"Ultramassive black hole (quasar)",flags:["SIZE UNCERTAIN"],fact:"One of the most massive black holes known — ~66 billion Suns. Its event horizon alone is ~40× the Sun–Pluto distance. Powers a quasar shining with 140 trillion Suns' light.",kidFact:"The biggest black hole we know! It's so heavy it weighs as much as 66 BILLION Suns!",emoji:"👑"},{id:"cygx1",name:"Cygnus X-1",kind:"blackhole",group:"exotic",radiusKm:62,color:10467583,...ut(19.972,35.2,7240),mass:"21 solar masses",type:"Stellar-mass black hole",fact:"The first black hole ever confirmed (Stephen Hawking famously lost a bet about it). It devours gas from a giant companion star, glowing in X-rays."},{id:"gaiabh1",name:"Gaia BH1",kind:"blackhole",group:"exotic",radiusKm:29,color:9087216,...ut(17.478,-.58,1560),mass:"9.6 solar masses",type:"Nearest known black hole",fact:"The closest known black hole to Earth — just 1,560 light-years away — discovered in 2022 by the wobble of a Sun-like star orbiting it."},{id:"crab",name:"Crab Pulsar",kind:"neutron",group:"exotic",radiusKm:10,color:12575999,...ut(5.575,22.01,6500),spinHz:30,mass:"1.4 solar masses",type:"Neutron star / pulsar",temp:"~1.6 million K surface",fact:"The crushed core of a supernova Chinese astronomers watched explode in 1054 AD. A city-sized ball spinning 30 times per second, sweeping lighthouse beams across space. A teaspoon of it weighs ~a billion tonnes.",kidFact:"A whole star squished into a ball the size of a city, spinning 30 times every second — like a cosmic lighthouse!",emoji:"💡"},{id:"vela",name:"Vela Pulsar",kind:"neutron",group:"exotic",radiusKm:10,color:12904703,...ut(8.59,-45.18,959),spinHz:11.2,mass:"~1.4 solar masses",type:"Neutron star / pulsar",fact:'One of the closest pulsars, born in a supernova ~11,000 years ago. It occasionally "glitches" — suddenly spinning faster as its superfluid interior slips.'},{id:"psr1919",name:"PSR B1919+21",kind:"neutron",group:"exotic",radiusKm:10,color:13691647,...ut(19.36,21.88,2283),spinHz:.75,type:"Neutron star — the first pulsar discovered",fact:'The first pulsar ever found (Jocelyn Bell Burnell, 1967). Its metronome-steady radio blips were half-jokingly labelled "LGM-1" — Little Green Men.'},{id:"magnetar",name:"SGR 1806−20",kind:"neutron",group:"exotic",radiusKm:10,color:14730495,...ut(18.14,-20.41,42e3),spinHz:.13,type:"Magnetar — strongest magnet known",fact:"A neutron star with a magnetic field a quadrillion times Earth's. Its 2004 starquake flash was the brightest event ever seen from outside our solar system — it measurably zapped Earth's atmosphere from 42,000 ly away.",kidFact:"The strongest magnet in the universe! It could pull the keys out of your pocket from as far away as the Moon!",emoji:"🧲"},{id:"rxj1856",name:"RX J1856.5−3754",kind:"neutron",group:"exotic",radiusKm:10,color:13625599,...ut(18.94,-37.9,400),type:"Nearest known neutron star",fact:"A quiet, lone neutron star drifting just ~400 light-years away — close enough for Hubble to see its bare, million-degree surface directly."},{id:"quarkstar",name:"3C 58 (quark star?)",kind:"quark",group:"hypo",radiusKm:8,color:9437145,...ut(2.09,64.83,1e4),spinHz:15.4,flags:["THEORETICAL"],type:"Pulsar — quark star candidate",fact:"A real pulsar that seems too cold and too small for a normal neutron star. Some physicists propose it may be a QUARK STAR — matter crushed one step further, into a soup of free quarks. Unproven; most likely explanation is still an unusual neutron star.",kidFact:"Maybe a star made of the tiniest pieces of anything — pieces smaller than small! Scientists are still figuring it out.",emoji:"🧪"},{id:"whitehole",name:"White hole (concept)",kind:"exhibit",group:"hypo",radiusKm:1e7,color:16777215,...ut(9.5,40,3e6),flags:["HYPOTHETICAL"],type:"Hypothetical object — never observed",fact:"The mathematical time-reverse of a black hole: a region nothing can ENTER, only leave. Allowed by Einstein's equations, but no known way to form one — none has ever been observed. This exhibit is placed at an arbitrary location.",kidFact:`A pretend "opposite" black hole — instead of swallowing things, it would only spit them out! Nobody has ever seen one. It's an idea!`,emoji:"⚪"},{id:"lmc",name:"Large Magellanic Cloud",kind:"galaxy",group:"deep",radiusKm:7e3*ue,color:12374271,...ut(5.4,-69.76,163e3),type:"Dwarf satellite galaxy of the Milky Way",fact:"Our galaxy's brightest companion, home to the Tarantula Nebula — the most violent star-forming region in the Local Group. Visible to the naked eye from the southern hemisphere."},{id:"smc",name:"Small Magellanic Cloud",kind:"galaxy",group:"deep",radiusKm:3500*ue,color:11913461,...ut(.88,-72.83,2e5),type:"Dwarf satellite galaxy",fact:"A small galaxy being slowly pulled apart by the Milky Way's gravity, trailing a stream of gas across the sky."},{id:"andromeda",name:"Andromeda Galaxy (M31)",kind:"galaxy",group:"deep",radiusKm:11e4*ue,color:14081535,...ut(.712,41.27,2537e3),type:"Spiral galaxy — nearest large galaxy",mass:"~1 trillion solar masses",fact:"A trillion stars, 2.5 million light-years away — the farthest thing visible to the naked eye. It's approaching us at 110 km/s and will merge with the Milky Way in ~4.5 billion years.",kidFact:"A whole other galaxy with a TRILLION stars! One day, in a super long time, it will give our galaxy a big hug and they'll become one!",emoji:"🌌"},{id:"triangulum",name:"Triangulum Galaxy (M33)",kind:"galaxy",group:"deep",radiusKm:3e4*ue,color:13227775,...ut(1.564,30.66,273e4),type:"Spiral galaxy",fact:"The third-largest galaxy in our Local Group — a face-on spiral bursting with newborn stars."},{id:"whirlpool",name:"Whirlpool Galaxy (M51)",kind:"galaxy",group:"deep",radiusKm:38e3*ue,color:13425407,...ut(13.5,47.2,28e6),type:"Interacting spiral galaxy",fact:"The textbook spiral — its perfect arms are being wound up by a small companion galaxy tugging on it."},{id:"sombrero",name:"Sombrero Galaxy (M104)",kind:"galaxy",group:"deep",radiusKm:25e3*ue,color:14735817,...ut(12.666,-11.62,293e5),type:"Lenticular galaxy",fact:"A brilliant bulge wrapped in a dark dust ring — housing a billion-solar-mass black hole."},{id:"m87",name:"Messier 87",kind:"galaxy",group:"deep",radiusKm:6e4*ue,color:15788249,...ut(12.514,12.39,535e5),type:"Giant elliptical galaxy",fact:"The monster of the Virgo Cluster: several trillion stars, 15,000 globular clusters, and the famous M87* black hole at its heart."},{id:"virgo",name:"Virgo Cluster",kind:"cluster",group:"deep",radiusKm:75e5*ue,color:14275312,...ut(12.5,12.7,538e5),type:"Galaxy cluster (~1,300 galaxies)",fact:"The nearest big galaxy cluster — its gravity is the anchor of our entire Local Group's neighbourhood, the Virgo Supercluster."},{id:"coma",name:"Coma Cluster",kind:"cluster",group:"deep",radiusKm:1e7*ue,color:13946094,...ut(13,27.98,321e6),type:"Galaxy cluster (~1,000 galaxies)",fact:"Where dark matter was first inferred: in 1933 Fritz Zwicky noticed its galaxies move far too fast for the visible mass to hold them together."},{id:"greatattractor",name:"Great Attractor",kind:"cluster",group:"deep",radiusKm:15e6*ue,color:15256020,...ut(16.25,-60,22e7),flags:["APPROXIMATE POSITION"],type:"Gravitational anomaly (Norma Cluster region)",fact:"A vast concentration of mass pulling the Milky Way and millions of other galaxies toward it at ~600 km/s. Hidden behind our galaxy's dust, it's never been fully seen.",kidFact:"Something HUGE and invisible is gently pulling our whole galaxy toward it, like a river current. Whoooosh!",emoji:"🌀"},{id:"shapley",name:"Shapley Supercluster",kind:"cluster",group:"deep",radiusKm:5e7*ue,color:14469608,...ut(13.42,-31.5,65e7),type:"Supercluster — greatest mass concentration nearby",fact:"The largest concentration of galaxies in our cosmic neighbourhood — over 8,000 galaxies whose combined pull helps drag everything around us, including us."},{id:"3c273",name:"3C 273",kind:"quasar",group:"deep",radiusKm:1e10,color:13624575,...ut(12.485,2.05,24e8),type:"Quasar — first ever identified",fact:"The first quasar recognized (1963): a feeding supermassive black hole shining 4 trillion times brighter than the Sun. If it sat 30 ly away, it would rival the Sun in our sky."},{id:"gnz14",name:"JADES-GS-z14-0",kind:"galaxy",group:"deep",radiusKm:1600*ue,color:16757683,...ut(3.53,-27.8,135e8),type:"Most distant confirmed galaxy (z = 14.3)",fact:"Discovered by JWST in 2024 — its light left when the universe was only ~290 million years old. We see it as it was 13.5 billion years ago.",kidFact:"The light from this baby galaxy traveled for 13 and a half BILLION years to reach your eyes — the oldest light show ever!",emoji:"👶"},{id:"cmb",name:"Cosmic microwave background",kind:"region",group:"deep",radiusKm:0,color:16764830,...ut(0,0,454e8),flags:["REPRESENTATIVE"],type:"The edge of the observable universe",fact:"The oldest light in existence — released 380,000 years after the Big Bang, now stretched to microwaves, arriving from every direction. Beyond this we cannot see: the universe was opaque. Comoving distance ~45.4 billion ly.",kidFact:"This is the baby picture of the WHOLE universe — the very first light there ever was, and it's all around us!",emoji:"📻"}],ml={ra:17.7611,dec:-29.008},gl={ra:12.8573,dec:27.128},Kr=26670*ue,$i=52850*ue,no=new Map(Ci.map(i=>[i.id,i])),Bm={solar:"Solar System",stars:"Stars",exotic:"Black Holes & Dead Stars",deep:"Galaxies & Deep Space",hypo:"Hypothetical & Theoretical"},Ns=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","uranus","neptune","pluto","voyager1","proxima","trappist1","betelgeuse","siriusb","crab","magnetar","sgra","andromeda","gnz14","cmb"],Ws=1e10,Pn=Math.PI/180,Fs=23.43928*Pn,zm=Date.UTC(2e3,0,1,12),re=i=>Math.hypot(i[0],i[1],i[2]),ee=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]];function Da(i,t,e){const n=i*15*Pn,s=t*Pn,r=Math.cos(s)*Math.cos(n),a=Math.cos(s)*Math.sin(n),o=Math.sin(s),l=a*Math.cos(Fs)+o*Math.sin(Fs),c=-a*Math.sin(Fs)+o*Math.cos(Fs);return[r*e,c*e,-l*e]}function ac(i,t){const e=(t-zm)/315576e7,n=(i.a+(i.da??0)*e)*ve,s=i.e+(i.de??0)*e,r=(i.i+(i.di??0)*e)*Pn,a=(i.L+(i.dL??0)*e)*Pn,o=(i.peri+(i.dperi??0)*e)*Pn,l=(i.node+(i.dnode??0)*e)*Pn,c=o-l;let h=(a-o)%(2*Math.PI),u=h;for(let A=0;A<8;A++)u=u-(u-s*Math.sin(u)-h)/(1-s*Math.cos(u));const d=n*(Math.cos(u)-s),p=n*Math.sqrt(1-s*s)*Math.sin(u),g=Math.cos(c),_=Math.sin(c),m=Math.cos(l),f=Math.sin(l),S=Math.cos(r),y=Math.sin(r),b=(g*m-_*f*S)*d+(-_*m-g*f*S)*p,D=(g*f+_*m*S)*d+(-_*f+g*m*S)*p,w=_*y*d+g*y*p;return[b,w,-D]}function Ua(i){return i<=Ws?i:Ws*(1+Math.log(i/Ws))}const Hm=`
  const float LZ = ${Ws.toExponential()};
  // NB: distances reach 4e23 km; length() would square that past float32 max
  // (inf -> NaN -> giant white garbage points on some GPUs). Rescale first.
  vec3 compress(vec3 rel) {
    vec3 rs = rel * 1e-12;
    float d = length(rs) * 1e12;
    if (!(d > 0.0) || d > 1e30) return vec3(0.0, 0.0, -1e30); // NaN/degenerate guard: park behind far plane
    if (d <= LZ) return rel;
    return rel * (LZ * (1.0 + log(d / LZ)) / d);
  }
`;class Gm{renderer;scene=new Ja;camera;camPos=[ve*1.0002,ve*12e-5,0];yaw=0;pitch=0;objs=[];clouds=[];keys=new Set;speedMult=1;simTimeMs=Date.now();simSpeed=1;lastSelPos=null;paused=!1;travel=null;onSelect=()=>{};selected=null;inflate=1;lastFrame=performance.now();constructor(t){this.renderer=new wm({canvas:t,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.camera=new ke(60,1,1e-4,1e13),this.scene.add(this.camera),this.resize(),addEventListener("resize",()=>this.resize()),this.bindControls(t)}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}add(t){this.objs.push(t),this.scene.add(t.group)}addCloud(t,e,n){const s=new cn({transparent:!0,depthWrite:!1,blending:xn,uniforms:{uCamRel:{value:new R},uSize:{value:n.size??1.5},uOpacity:{value:n.opacity??1},uColor:{value:new Ct(n.color??16777215)}},vertexShader:`
        uniform vec3 uCamRel; uniform float uSize;
        attribute vec3 color;
        varying vec3 vColor;
        ${Hm}
        void main() {
          vColor = color;
          vec3 rel = position - uCamRel;
          vec3 p = compress(rel);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(uSize * 2.2e10 / length(p), 1.0, 5.0);
        }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying vec3 vColor;
        void main() {
          ${n.isLine?"":"vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c));"}
          gl_FragColor = vec4(vColor * uColor, ${n.isLine?"uOpacity":"a * uOpacity"});
        }`}),r=n.isLine?new Cm(t,s):new tr(t,s);r.frustumCulled=!1;const a=new Ye;return a.add(r),this.scene.add(a),this.clouds.push({group:a,origin:e,mat:s}),s}bindControls(t){let e=!1,n=0,s=0,r=0;t.addEventListener("pointerdown",a=>{e=!0,n=a.clientX,s=a.clientY,t.setPointerCapture(a.pointerId)}),t.addEventListener("pointerup",a=>{e=!1,Math.abs(a.clientX-n)<5&&Math.abs(a.clientY-s)<5&&this.pick(a.clientX,a.clientY)}),t.addEventListener("pointermove",a=>{e&&(this.yaw-=(a.movementX??0)*.0022,this.pitch=Math.max(-1.55,Math.min(1.55,this.pitch-(a.movementY??0)*.0022)),this.travel=null)}),t.addEventListener("wheel",a=>{a.preventDefault(),this.speedMult*=Math.pow(1.15,-Math.sign(a.deltaY)),this.speedMult=Math.max(.001,Math.min(5e4,this.speedMult))},{passive:!1}),t.addEventListener("touchmove",a=>{if(a.touches.length===2){const o=Math.hypot(a.touches[0].clientX-a.touches[1].clientX,a.touches[0].clientY-a.touches[1].clientY);r>0&&this.moveForward((o-r)*.02),r=o}},{passive:!0}),t.addEventListener("touchend",()=>{r=0}),addEventListener("keydown",a=>{a.target?.tagName!=="INPUT"&&this.keys.add(a.code)}),addEventListener("keyup",a=>this.keys.delete(a.code))}get quat(){return new ti().setFromEuler(new Be(this.pitch,this.yaw,0,"YXZ"))}moveForward(t){const e=new R(0,0,-1).applyQuaternion(this.quat),n=this.adaptiveSpeed()*t;this.camPos[0]+=e.x*n,this.camPos[1]+=e.y*n,this.camPos[2]+=e.z*n}nearestSurfaceDist(){let t=1/0;for(const e of this.objs){if(!e.body.radiusKm)continue;const n=re(ee(e.worldPos,this.camPos))-e.body.radiusKm;n<t&&(t=n)}return Math.max(t,1)}adaptiveSpeed(){return Math.max(2,this.nearestSurfaceDist()*.9)*this.speedMult}flyTo(t,e){const n=Math.max(t.body.radiusKm,1),s=t.body.radiusKm>0?n*(e?.standoffR??4.5):2e7;this.travel={from:[...this.camPos],toBody:t,standoff:s,t:0,dur:e?.dur??5,startQ:this.quat.clone()},this.select(t)}select(t){this.selected=t,this.lastSelPos=null,this.onSelect(t)}pick(t,e){const n=innerWidth,s=innerHeight;let r=null,a=45;const o=new R,l=this.quat.clone().invert();for(const c of this.objs){const h=ee(c.worldPos,this.camPos),u=re(h);if(u===0)continue;const d=Ua(u)/u;if(o.set(h[0]*d,h[1]*d,h[2]*d).applyQuaternion(l),o.z>0)continue;const p=o.clone().applyMatrix4(this.camera.projectionMatrix),g=(p.x*.5+.5)*n,_=(-p.y*.5+.5)*s,m=Math.hypot(g-t,_-e)-Math.min(c.angularPx/2,80);m<a&&(a=m,r=c)}r&&this.select(r)}frame(){const t=performance.now(),e=Math.min((t-this.lastFrame)/1e3,1),n=Math.min(e,.1);this.lastFrame=t,this.paused||(this.simTimeMs+=this.simSpeed*n*1e3);for(const p of this.objs)p.update?.(this.simTimeMs);if(this.selected?.update){const p=this.selected.worldPos;this.lastSelPos&&(this.camPos[0]+=p[0]-this.lastSelPos[0],this.camPos[1]+=p[1]-this.lastSelPos[1],this.camPos[2]+=p[2]-this.lastSelPos[2]),this.lastSelPos=[p[0],p[1],p[2]]}else this.lastSelPos=null;if(this.travel){const p=this.travel;p.t+=e/p.dur;const g=p.toBody.worldPos,_=ee(p.from,g);let m=re(_);m<1&&(m=1);const f=(m<p.standoff*1.01,_),S=p.t>=1?1:1-Math.pow(1-Math.min(p.t,1),3),y=Math.exp(Math.log(m)*(1-S)+Math.log(p.standoff)*S),b=1/m;this.camPos=[g[0]+f[0]*b*y,g[1]+f[1]*b*y,g[2]+f[2]*b*y];const D=ee(g,this.camPos),w=re(D),A=new te().lookAt(new R(0,0,0),new R(D[0]/w,D[1]/w,D[2]/w),new R(0,1,0)),I=new ti().setFromRotationMatrix(A),E=p.startQ.clone().slerp(I,Math.min(1,S*2)),v=new Be().setFromQuaternion(E,"YXZ");this.yaw=v.y,this.pitch=v.x,p.t>=1&&(this.travel=null)}const s=this.quat,r=new R(0,0,-1).applyQuaternion(s),a=new R(1,0,0).applyQuaternion(s),o=new R(0,1,0).applyQuaternion(s),l=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?8:1,c=this.adaptiveSpeed()*n*l,h=new R;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&h.add(r),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&h.sub(r),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&h.sub(a),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&h.add(a),this.keys.has("KeyQ")&&h.sub(o),this.keys.has("KeyE")&&h.add(o),h.lengthSq()>0&&(h.normalize().multiplyScalar(c),this.camPos[0]+=h.x,this.camPos[1]+=h.y,this.camPos[2]+=h.z,this.travel=null),this.camera.quaternion.copy(s),this.camera.position.set(0,0,0);const d=innerHeight/(2*Math.tan(this.camera.fov*Pn/2));for(const p of this.objs){const g=ee(p.worldPos,this.camPos),_=re(g);if(p.distToCam=_,_===0){p.group.visible=!1;continue}const f=Ua(_)/_;p.group.position.set(g[0]*f,g[1]*f,g[2]*f);const S=p.body.kind==="planet"||p.body.kind==="dwarf"||p.body.kind==="moon"?this.inflate:1;p.group.scale.setScalar(f*S),p.group.visible=!0,p.angularPx=p.body.radiusKm>0?2*p.body.radiusKm*S/_*d:0,p.onFrame?.(p,this.paused?0:this.simSpeed*n,this)}for(const p of this.clouds)p.mat.uniforms.uCamRel.value.set(this.camPos[0]-p.origin[0],this.camPos[1]-p.origin[1],this.camPos[2]-p.origin[2]);return this.renderer.render(this.scene,this.camera),n}distFromSun(){return no.get("sun"),re(this.camPos)}}class Vm{constructor(t,e,n=44){this.engine=e,this.container=t;for(let s=0;s<n;s++){const r=document.createElement("div");r.className="lbl",r.style.display="none",r.addEventListener("pointerdown",a=>a.stopPropagation()),t.appendChild(r),this.pool.push(r)}}pool=[];container;update(t){const e=this.engine,n=innerWidth,s=innerHeight,r=e.quat.clone().invert(),a=new R,o=[];for(const h of e.objs){if(h.distToCam>h.labelMaxD||h.body.radiusKm>0&&h.distToCam<h.body.radiusKm*1.2)continue;const u=ee(h.worldPos,e.camPos),d=Ua(h.distToCam)/h.distToCam;if(a.set(u[0]*d,u[1]*d,u[2]*d).applyQuaternion(r),a.z>=0)continue;const p=a.applyMatrix4(e.camera.projectionMatrix);if(p.x<-1.05||p.x>1.05||p.y<-1.05||p.y>1.05)continue;let g=h.labelPriority+Math.min(h.angularPx,200)*.02;h===e.selected&&(g+=1e3),o.push({o:h,x:(p.x*.5+.5)*n,y:(-p.y*.5+.5)*s-Math.min(h.angularPx/2,s/4)-12,pri:g})}o.sort((h,u)=>u.pri-h.pri);const l=[],c=t?120:64;for(const h of o){if(l.length>=this.pool.length)break;l.some(u=>Math.abs(u.x-h.x)<c&&Math.abs(u.y-h.y)<26)||l.push(h)}for(let h=0;h<this.pool.length;h++){const u=this.pool[h],d=l[h];if(!d){u.style.display="none";continue}u.style.display="block",u.style.transform=`translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px) translate(-50%, -100%)`;const p=d.o.body.flags?.includes("HYPOTHETICAL")||d.o.body.flags?.includes("THEORETICAL"),g=t&&d.o.body.emoji?`${d.o.body.emoji} ${d.o.body.name}`:d.o.body.name;u.textContent=p?`${g} ?`:g,u.className="lbl"+(d.o===e.selected?" sel":"")+(p?" hypo":"")+(t?" kid":""),u.onclick=()=>e.flyTo(d.o)}}}function qn(i){const t=i/ve,e=i/ue;return e>=1e9?`${(e/1e9).toFixed(2)} billion ly`:e>=1e6?`${(e/1e6).toFixed(2)} million ly`:e>=1e3?`${Math.round(e).toLocaleString()} ly`:e>=.1?`${e.toPrecision(3)} light-years`:t>=.01?`${t.toPrecision(3)} AU`:i>=1e6?`${(i/1e6).toPrecision(3)} million km`:`${Math.round(i).toLocaleString()} km`}function Wm(i){return i>=.5*695700?`${(i/695700).toPrecision(3)} × Sun (${(i/1e6).toPrecision(3)}M km)`:i>=1e3?`${Math.round(i).toLocaleString()} km (${(i/6371).toPrecision(2)} × Earth)`:`${i.toPrecision(3)} km`}const _l=new Map;function cr(i,t,e=256,n=128){let s=_l.get(i);if(s)return s;const r=document.createElement("canvas");return r.width=e,r.height=n,t(r.getContext("2d"),e,n),s=new Pm(r),s.colorSpace=qe,_l.set(i,s),s}function Xm(){return cr("glow",(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},128,128)}const vl={mercury:"2k_mercury.jpg",venus:"2k_venus_atmosphere.jpg",earth:"2k_earth_daymap.jpg",mars:"2k_mars.jpg",jupiter:"2k_jupiter.jpg",saturn:"2k_saturn.jpg",uranus:"2k_uranus.jpg",neptune:"2k_neptune.jpg",moon:"2k_moon.jpg"},qm=new Um;function xl(i,t){qm.load(`/cosmos/tex/${i}`,e=>{e.colorSpace=qe,e.anisotropy=4,t.map=e,t.needsUpdate=!0})}let Nn=12345;const Mt=()=>(Nn=Nn*1103515245+12345&2147483647)/2147483647;function Km(i){return cr(i.id,(t,e,n)=>{const s=new Ct(i.color),r=(o,l=0)=>`rgb(${Math.min(255,s.r*255*o+l)|0},${Math.min(255,s.g*255*o+l)|0},${Math.min(255,s.b*255*o+l)|0})`;if(t.fillStyle=r(1),t.fillRect(0,0,e,n),Nn=i.id.length*7919+i.id.charCodeAt(0),["jupiter","saturn","uranus","neptune"].includes(i.id)){for(let o=0;o<n;o+=2+Mt()*6){const l=.75+Mt()*.5;t.fillStyle=r(l),t.globalAlpha=.7,t.fillRect(0,o,e,3+Mt()*6)}i.id==="jupiter"&&(t.globalAlpha=.9,t.fillStyle="#b5462f",t.beginPath(),t.ellipse(e*.3,n*.62,16,8,0,0,7),t.fill())}else{for(let o=0;o<240;o++){t.globalAlpha=.16,t.fillStyle=Mt()>.5?r(1.25):r(.7);const l=2+Mt()*12;t.beginPath(),t.arc(Mt()*e,Mt()*n,l,0,7),t.fill()}if(i.id==="earth"){t.globalAlpha=.95,t.fillStyle="#3e8a4a";for(let o=0;o<26;o++){const l=6+Mt()*16;t.beginPath(),t.arc(Mt()*e,n*(.18+Mt()*.64),l,0,7),t.fill()}t.fillStyle="#eef4f8",t.globalAlpha=1,t.fillRect(0,0,e,7),t.fillRect(0,n-7,e,7)}i.id==="mars"&&(t.globalAlpha=1,t.fillStyle="#e8e2da",t.fillRect(0,0,e,5),t.fillRect(0,n-5,e,5))}t.globalAlpha=1})}function bi(i,t){const e=new Am(new nc({map:Xm(),color:i,transparent:!0,blending:xn,depthWrite:!1}));return e.scale.setScalar(t),e}const Ym={sun:30,planet:26,dwarf:14,moon:10,blackhole:22,neutron:18,quark:18,whitedwarf:14,star:12,galaxy:16,cluster:8,quasar:12,probe:12,region:8,exhibit:14};function jm(i){const t=new Map;for(const s of Ci){const r=new Ye,a={body:s,group:r,worldPos:[0,0,0],labelMaxD:$m(s),labelPriority:Ym[s.kind]??8,angularPx:0,distToCam:1/0};if(s.orbit)a.update=l=>{a.worldPos=ac(s.orbit,l)};else if(s.parent)a.update=l=>{const c=t.get(s.parent),h=(s.moonPdays??1)*864e5,u=l/h*2*Math.PI%(2*Math.PI)*Math.sign(s.moonPdays??1);a.worldPos=[c.worldPos[0]+Math.cos(u)*s.moonAKm,c.worldPos[1],c.worldPos[2]+Math.sin(u)*s.moonAKm]};else{const l=s.distKm===0?[0,0,0]:Da(s.ra,s.dec,s.distKm);a.worldPos=l}a.update?.(i.simTimeMs);const o=s.radiusKm;if(s.kind==="sun"||s.kind==="star"){const l=new Ot(new De(o||1,32,16),new Te({color:s.color}));r.add(l,bi(s.color,(o||1)*6))}else if(s.kind==="planet"||s.kind==="dwarf"||s.kind==="moon"){const l=new Ot(new De(o,48,24),new ir({map:Km(s),roughness:.95}));if(s.ring){const c=new nr(o*s.ring.inner,o*s.ring.outer,96);{const u=c.attributes.position,d=c.attributes.uv,p=o*s.ring.inner,g=o*s.ring.outer;for(let _=0;_<u.count;_++)d.setXY(_,(Math.hypot(u.getX(_),u.getY(_))-p)/(g-p),.5)}const h=new Ot(c,new Te({color:s.ring.color,side:Qe,transparent:!0,opacity:.55,map:cr("ring",(u,d,p)=>{for(let g=0;g<d;g++)u.globalAlpha=.3+.7*Math.abs(Math.sin(g*.35)),u.fillStyle="#fff",u.fillRect(g,0,1,p)},128,4)}));h.rotation.x=Math.PI/2-.15,r.add(h),s.id==="saturn"&&xl("2k_saturn_ring_alpha.png",h.material)}r.add(l),vl[s.id]&&xl(vl[s.id],l.material),a.onFrame=(c,h)=>{s.rotationHrs&&(l.rotation.y+=h/3600/s.rotationHrs*2*Math.PI)}}else if(s.kind==="blackhole"){const l=new Ot(new De(o,32,16),new Te({color:0})),c=bi(s.color,o*6),h=new Ot(new nr(o*2.2,o*6,64),new Te({color:s.color,side:Qe,transparent:!0,opacity:.5,blending:xn,depthWrite:!1}));h.rotation.x=Math.PI/2-.35,r.add(l,c,h)}else if(s.kind==="neutron"||s.kind==="quark"||s.kind==="whitedwarf"){const l=new Ot(new De(Math.max(o,1),24,12),new Te({color:s.color})),c=bi(s.color,Math.max(o,1)*30);if(r.add(l,c),s.spinHz){const h=new Te({color:s.color,transparent:!0,opacity:.28,blending:xn,depthWrite:!1}),u=new Ye;for(const p of[1,-1]){const g=new Ot(new Fi(o*8,o*90,12,1,!0),h);g.position.y=p*o*45,g.rotation.z=p>0?Math.PI:0,u.add(g)}u.rotation.z=.4,r.add(u);const d=Math.min(s.spinHz,3);a.onFrame=()=>{u.rotation.y=performance.now()/1e3*d*2*Math.PI,c.material.opacity=.6+.4*Math.sin(performance.now()/90)}}}else if(s.kind==="galaxy")r.add(eg(s,o));else if(s.kind==="exhibit"&&s.id==="whitehole"){const l=new Ot(new De(o,32,16),new Te({color:16777215}));r.add(l,bi(14677247,o*10))}else if(s.kind==="exhibit"){const l=new Ot(new De(o,32,16),new ir({color:s.color,transparent:!0,opacity:.5,roughness:1}));r.add(l)}else r.add(bi(s.color,Math.max(o,1)));if(o>0&&(s.kind==="planet"||s.kind==="dwarf"||s.kind==="moon"||s.kind==="star"||s.kind==="sun")){const l=bi(s.color,1);a.onFrame=(c=>(h,u,d)=>{c?.(h,u,d),l.visible=h.angularPx<4&&h.distToCam<h.labelMaxD;const p=innerHeight/(2*Math.tan(d.camera.fov*Math.PI/360)),g=h.body.kind==="star"||h.body.kind==="sun"?1:d.inflate;l.scale.setScalar(h.distToCam*(h.body.kind==="moon"?5:8)/(p*g))})(a.onFrame),r.add(l)}t.set(s.id,a),i.add(a)}Zm(i),Jm(i),tg(i),ng(i);const e=new Fm(16773853,2.5,0,0);return t.get("sun").group.add(e),i.scene.add(new rc(4478310,.85)),t}function $m(i){switch(i.kind){case"moon":return(i.moonAKm??4e5)*120;case"planet":case"dwarf":return 250*ve;case"sun":return 60*ue;case"probe":return 600*ve;case"region":return i.id==="oort"?60*ue:i.id==="cmb"?1/0:250*ve;case"exhibit":return i.id==="planet9"?5e3*ve:1/0;default:return i.group==="deep"?1/0:4e5*ue}}function Zm(i){for(const t of Ci){if(!t.orbit)continue;const e=[],n=i.simTimeMs;Math.pow(t.orbit.a,1.5);for(let a=0;a<=192;a++){const o=ac({...t.orbit,dL:0,L:t.orbit.L+a/192*360},n);e.push(o[0],o[1],o[2])}const s=new oe;s.setAttribute("position",new de(e,3));const r=new Float32Array(e.length).fill(1);s.setAttribute("color",new ne(r,3)),i.addCloud(s,[0,0,0],{isLine:!0,opacity:t.group==="hypo"?.1:.22,color:t.group==="hypo"?8035017:4876954})}}function yl(i,t,e,n,s,r,a){const o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Ct(r);for(let u=0;u<s;u++){const d=Mt()*Math.PI*2,p=t+(e-t)*Math.sqrt(Mt());o[u*3]=Math.cos(d)*p,o[u*3+1]=(Mt()-.5)*n,o[u*3+2]=Math.sin(d)*p;const g=.5+Mt()*.5;l[u*3]=c.r*g,l[u*3+1]=c.g*g,l[u*3+2]=c.b*g}const h=new oe;h.setAttribute("position",new ne(o,3)),h.setAttribute("color",new ne(l,3)),i.addCloud(h,[0,0,0],{size:a,opacity:.8,color:16777215})}function Jm(i){Nn=777,yl(i,2.1*ve,3.3*ve,.3*ve,3e3,10129280,1.2),yl(i,30*ve,50*ve,4*ve,4e3,8032432,1.2);const t=3500,e=new Float32Array(t*3),n=new Float32Array(t*3);for(let r=0;r<t;r++){const a=Mt()*2-1,o=Mt()*Math.PI*2,l=(2e3+78e3*Math.pow(Mt(),1.6))*ve,c=Math.sqrt(1-a*a);e[r*3]=c*Math.cos(o)*l,e[r*3+1]=a*l,e[r*3+2]=c*Math.sin(o)*l,n[r*3]=.35,n[r*3+1]=.42,n[r*3+2]=.55}const s=new oe;s.setAttribute("position",new ne(e,3)),s.setAttribute("color",new ne(n,3)),i.addCloud(s,[0,0,0],{size:1,opacity:.5})}function Qm(){const i=Da(ml.ra,ml.dec,1),t=Da(gl.ra,gl.dec,1),e=new R(...t).normalize(),n=new R(...i).normalize();n.addScaledVector(e,-n.dot(e)).normalize();const s=new R().crossVectors(e,n);return{xg:n,yg:s,zg:e,centerDir:new R(...i).normalize()}}function tg(i){Nn=424242;const{xg:t,yg:e,zg:n,centerDir:s}=Qm(),r=[s.x*Kr,s.y*Kr,s.z*Kr],a=24e3,o=new Float32Array(a*3),l=new Float32Array(a*3),c=4,h=new R;for(let d=0;d<a;d++){let p,g,_,m,f,S;if(d<a*.16)p=Math.pow(Mt(),2)*$i*.14,g=Mt()*Math.PI*2,_=(Mt()-.5)*p*.9,m=1,f=.85,S=.65;else{p=Math.sqrt(Mt())*$i;const b=d%c*(2*Math.PI/c),D=p/$i*4.2;g=b+D+(Mt()-.5)*(.25+.7*Mt()),_=(Mt()-.5)*$i*.012*(1+2*Math.pow(1-p/$i,2));const w=Mt()>.5;m=w?.75:1,f=w?.82:.85,S=w?1:.7}h.set(0,0,0).addScaledVector(t,Math.cos(g)*p).addScaledVector(e,Math.sin(g)*p).addScaledVector(n,_),o[d*3]=h.x,o[d*3+1]=h.y,o[d*3+2]=h.z;const y=.35+Mt()*.65;l[d*3]=m*y,l[d*3+1]=f*y,l[d*3+2]=S*y}const u=new oe;u.setAttribute("position",new ne(o,3)),u.setAttribute("color",new ne(l,3)),i.addCloud(u,r,{size:1.6,opacity:.85})}function eg(i,t){Nn=i.id.charCodeAt(0)*999;const e=1200,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Ct(i.color);for(let c=0;c<e;c++){const h=Math.sqrt(Mt())*t,u=c%2*Math.PI+h/t*5+(Mt()-.5)*.8;n[c*3]=Math.cos(u)*h,n[c*3+1]=(Mt()-.5)*t*.08,n[c*3+2]=Math.sin(u)*h;const d=.4+Mt()*.6;s[c*3]=r.r*d,s[c*3+1]=r.g*d,s[c*3+2]=r.b*d}const a=new oe;a.setAttribute("position",new ne(n,3)),a.setAttribute("color",new ne(s,3));const o=new Qs({size:1.8,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.9,blending:xn,depthWrite:!1}),l=new tr(a,o);return l.rotation.set(Mt()*2,Mt()*2,Mt()*2),l}function ng(i){Nn=31337;const t=260,e=55,n=t*e,s=new Float32Array(n*3),r=new Float32Array(n*3);let a=0;for(let c=0;c<t;c++){const h=Mt()*2-1,u=Mt()*Math.PI*2,d=Math.pow(10,7.5+Mt()*3.1)*ue,p=Math.sqrt(1-h*h),g=p*Math.cos(u)*d,_=h*d,m=p*Math.sin(u)*d,f=d*.09,S=Mt()-.5,y=Mt()-.5,b=Mt()-.5;for(let D=0;D<e;D++){const w=(Mt()-.5)*2;s[a*3]=g+S*f*w*4+(Mt()-.5)*f,s[a*3+1]=_+y*f*w*4+(Mt()-.5)*f,s[a*3+2]=m+b*f*w*4+(Mt()-.5)*f;const A=Mt()*.3;r[a*3]=.55+A,r[a*3+1]=.5+A*.5,r[a*3+2]=.75,a++}}const o=new oe;o.setAttribute("position",new ne(s,3)),o.setAttribute("color",new ne(r,3)),i.addCloud(o,[0,0,0],{size:1.4,opacity:.55});const l=new Ot(new De(1,48,24),new Te({side:Ue,transparent:!0,opacity:.35,map:cr("cmb",(c,h,u)=>{c.fillStyle="#1a0f08",c.fillRect(0,0,h,u),Nn=99;for(let d=0;d<2600;d++){const p=Mt();c.fillStyle=p>.5?`rgba(255,${140+p*80|0},60,0.5)`:`rgba(70,90,${180+p*75|0},0.5)`;const g=2+Mt()*8;c.beginPath(),c.arc(Mt()*h,Mt()*u,g,0,7),c.fill()}},512,256)}));no.get("cmb"),new Ye,l.scale.setScalar(305e9),l.frustumCulled=!1,i.scene.add(l),i.cmbMat=l.material}const ig=[{id:"m1",text:"Fly to the Moon (press N to warp)",kidText:"Fly to the Moon! 🌙",targetId:"moon",done:!1},{id:"m2",text:"Visit Mars",kidText:"Zoom to Mars! 🔴",targetId:"mars",done:!1},{id:"m3",text:"Defend Earth — destroy 3 drones",kidText:"Beep boop! Tag 3 space robots! 🤖",wave:3,done:!1},{id:"m4",text:"Reach Jupiter",kidText:"Visit giant Jupiter! 🟠",targetId:"jupiter",done:!1},{id:"m5",text:"Ring-watch: visit Saturn",kidText:"See Saturn's rings! 🪐",targetId:"saturn",done:!1},{id:"m6",text:"Defend Saturn — destroy 5 drones",kidText:"Tag 5 more robots! 🤖",wave:5,done:!1},{id:"m7",text:"Far frontier: reach Pluto",kidText:"Say hi to little Pluto! 🤍",targetId:"pluto",done:!1},{id:"m8",text:"Interstellar: reach Proxima Centauri",kidText:"Fly to another STAR! ⭐",targetId:"proxima",done:!1},{id:"m9",text:"Event horizon: visit Sagittarius A*",kidText:"Peek at the black hole! 🕳️",targetId:"sgra",done:!1}],oc=[{id:"engine",name:"Engine boost",desc:"+60% flight speed / level",base:200},{id:"rapid",name:"Rapid fire",desc:"Shoot 40% faster / level",base:250},{id:"damage",name:"Heavy lasers",desc:"+1 damage / level",base:300},{id:"shield",name:"Shield cell",desc:"+25 shield / level",base:300}];class sg{constructor(t,e){this.engine=t,this.objMap=e,this.enemyProto=new Ye;const n=new Ot(new er(30,0),new Te({color:16729190,wireframe:!0})),s=new Ot(new er(14,1),new Te({color:16746649}));this.enemyProto.add(n,s),this.fighterProto=new Ye;const r=new ir({color:5906480,roughness:.4,metalness:.6}),a=new Ot(new Fi(14,70,6),r);a.rotation.x=Math.PI/2;const o=new Ot(new ei(90,3,26),r);o.position.z=12;const l=new Ot(new ei(3,26,18),r);l.position.set(0,12,16);const c=new Ot(new De(7,8,6),new Te({color:16737843}));c.position.z=36,this.fighterProto.add(a,o,l,c)}score=0;hull=100;shield=0;levels={engine:0,rapid:0,damage:0,shield:0};missions=ig.map(t=>({...t}));missionIdx=0;waveLeft=0;enemies=[];rocks=[];bolts=[];fireCd=0;firing=!1;easy=!1;audio=null;onChange=()=>{};onToast=()=>{};enemyProto;fighterProto;cost(t){return Math.round(oc.find(e=>e.id===t).base*Math.pow(2.1,this.levels[t]))}buy(t){const e=this.cost(t);return this.score<e?!1:(this.score-=e,this.levels[t]++,t==="shield"&&(this.shield+=25),this.beep(660,.12,"triangle"),this.onChange(),!0)}get speedFactor(){return 1+this.levels.engine*.6}get mission(){return this.missions[this.missionIdx]??null}beep(t,e,n="square",s=.05){try{this.audio??=new AudioContext;const r=this.audio.createOscillator(),a=this.audio.createGain();r.type=n,r.frequency.value=t,a.gain.setValueAtTime(s,this.audio.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.audio.currentTime+e),r.connect(a).connect(this.audio.destination),r.start(),r.stop(this.audio.currentTime+e)}catch{}}spawnWave(t){const e=this.engine,n=e.quat;for(let s=0;s<t;s++){const r=new R((Math.random()-.5)*1.4,(Math.random()-.5)*.8,-1).normalize().applyQuaternion(n),a=2500+Math.random()*2500,o=[e.camPos[0]+r.x*a,e.camPos[1]+r.y*a,e.camPos[2]+r.z*a],l=this.missionIdx>=4&&s%3===2,c=(l?this.fighterProto:this.enemyProto).clone();e.scene.add(c),this.enemies.push({mesh:c,pos:o,vel:[0,0,0],hp:l?6:3,fireCd:2+Math.random()*3,kind:l?"fighter":"drone",strafe:Math.random()>.5?1:-1})}this.onToast(this.easy?"🤖 Space robots incoming! Tag them with your laser!":`⚠ ${t} hostile drones inbound!`,!0),this.beep(180,.4,"sawtooth",.08)}spawnRock(t,e,n){const s=this.engine,r=new Qa(t,1),a=r.attributes.position;for(let c=0;c<a.count;c++){const h=.75+Math.random()*.5;a.setXYZ(c,a.getX(c)*h,a.getY(c)*h,a.getZ(c)*h)}r.computeVertexNormals();const o=new Ot(r,new ir({color:9076592,roughness:1,flatShading:!0}));s.scene.add(o);let l=e;if(!l){const c=new R(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).normalize(),h=1800+Math.random()*3500;l=[s.camPos[0]+c.x*h,s.camPos[1]+c.y*h,s.camPos[2]+c.z*h]}this.rocks.push({mesh:o,pos:l,hp:t>60?2:1,r:t,vel:n??[(Math.random()-.5)*8,(Math.random()-.5)*3,(Math.random()-.5)*8],spin:[Math.random()-.5,Math.random()-.5,Math.random()-.5]})}breakRock(t,e){const n=this.rocks[t];if(this.engine.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.rocks.splice(t,1),e){if(this.score+=25,this.beep(200,.18,"sawtooth",.06),n.r>55)for(let s=0;s<2;s++)this.spawnRock(n.r*.55,[...n.pos],[n.vel[0]+(Math.random()-.5)*120,n.vel[1]+(Math.random()-.5)*120,n.vel[2]+(Math.random()-.5)*120]);this.onChange()}}maintainRocks(){const t=re(this.engine.camPos),e=t>2.1*1496e5&&t<3.3*1496e5||t>30*1496e5&&t<50*1496e5,n=t<60*1496e5,s=e?24:this.enemies.length?8:n?6:0;this.rocks.length<s&&this.spawnRock(45+Math.random()*80);for(let r=this.rocks.length-1;r>=0;r--)re(ee(this.rocks[r].pos,this.engine.camPos))>8e4&&this.breakRock(r,!1)}fire(){if(this.fireCd>0)return;this.fireCd=.28/(1+this.levels.rapid*.4);const t=this.engine,e=new R(0,0,-1).applyQuaternion(t.quat),n=new Ot(new Ni(1.6,1.6,90,6),new Te({color:this.easy?6750105:6741503,blending:xn,transparent:!0,opacity:.95,depthWrite:!1}));n.quaternion.setFromUnitVectors(new R(0,1,0),e),t.scene.add(n);const s=new R(0,-8,0).applyQuaternion(t.quat);this.bolts.push({mesh:n,pos:[t.camPos[0]+s.x+e.x*60,t.camPos[1]+s.y+e.y*60,t.camPos[2]+s.z+e.z*60],vel:[e.x*6e3,e.y*6e3,e.z*6e3],life:1.6,hostile:!1}),this.beep(880,.07,"square",.04)}enemyFire(t){const e=this.engine,n=ee(e.camPos,t.pos),s=re(n),r=new Ot(new De(6,8,6),new Te({color:16733508,blending:xn,transparent:!0,depthWrite:!1}));e.scene.add(r);const a=this.easy?700:1400;this.bolts.push({mesh:r,pos:[...t.pos],vel:[n[0]/s*a,n[1]/s*a,n[2]/s*a],life:5,hostile:!0})}killEnemy(t){const e=this.enemies[t];this.engine.scene.remove(e.mesh),this.enemies.splice(t,1);const n=e.kind==="fighter"?250:100;this.score+=n,this.beep(120,.3,"sawtooth",.07),this.onToast(this.easy?`⭐ Tagged one! +${n}`:`+${n} — ${e.kind} destroyed`),this.waveLeft>0&&(this.waveLeft--,this.waveLeft===0&&this.completeMission()),this.onChange()}completeMission(){const t=this.mission;if(!t)return;t.done=!0,this.score+=250,this.missionIdx++,this.beep(523,.15,"triangle",.06),setTimeout(()=>this.beep(784,.25,"triangle",.06),140),this.onToast(this.easy?"🎉 YOU DID IT! +250 points!":"✅ Mission complete: +250",!0);const e=this.mission;e?.wave&&(this.waveLeft=e.wave,this.spawnWave(e.wave)),this.onChange()}update(t){const e=this.engine;this.fireCd-=t,this.firing&&this.fire();const n=this.mission;if(n?.targetId){const r=this.objMap.get(n.targetId),a=Math.max(r.body.radiusKm*12,5e5);re(ee(r.worldPos,e.camPos))<a&&this.completeMission()}let s=null;for(const r of e.objs){const a=r.body.radiusKm;if(a<=0)continue;const o=ee(e.camPos,r.worldPos),l=re(o);if(l<a*3&&l>0){const c=a+Math.max(a*2e-6,.02);if(l<c){const h=c/l;e.camPos=[r.worldPos[0]+o[0]*h,r.worldPos[1]+o[1]*h,r.worldPos[2]+o[2]*h],s=r}}}if(s&&!this.lastLanded){const r=s.body.kind==="sun"||s.body.kind==="star";this.onToast(r?this.easy?"🔥 Too hot to land! Whoa!":"🔥 Surface contact: ~5,800 K. Shields holding. (Do not try this in a real spaceship.)":this.easy?`🛬 You landed on ${s.body.name}! Great flying!`:`🛬 Landed on ${s.body.name}`,!0),this.beep(330,.2,"sine",.06),this.score+=25,this.onChange()}this.lastLanded=s,this.maintainRocks();for(let r=this.rocks.length-1;r>=0;r--){const a=this.rocks[r];a.pos=[a.pos[0]+a.vel[0]*t,a.pos[1]+a.vel[1]*t,a.pos[2]+a.vel[2]*t],a.mesh.position.set(a.pos[0]-e.camPos[0],a.pos[1]-e.camPos[1],a.pos[2]-e.camPos[2]),a.mesh.rotation.x+=a.spin[0]*t,a.mesh.rotation.y+=a.spin[1]*t;const o=re(ee(a.pos,e.camPos));if(o<a.r+40){const l=ee(e.camPos,a.pos),c=(a.r+45)/o;e.camPos=[a.pos[0]+l[0]*c,a.pos[1]+l[1]*c,a.pos[2]+l[2]*c],this.easy?this.beep(140,.15,"sine",.05):(this.hull-=8,this.beep(70,.3,"sawtooth",.1),this.onToast("💥 Asteroid impact!"),this.hull<=0&&this.respawn(),this.onChange())}}for(let r=this.enemies.length-1;r>=0;r--){const a=this.enemies[r],o=ee(e.camPos,a.pos),l=re(o),c=a.kind==="fighter",h=this.easy?900:c?800:450,u=this.easy?250:c?950:650,d=l>h?1:-.6;if(a.vel=[o[0]/l*u*d,o[1]/l*u*d,o[2]/l*u*d],c){const p=new R(o[0],o[1],o[2]).cross(new R(0,1,0)).normalize().multiplyScalar(u*.85*a.strafe);a.vel=[a.vel[0]*.55+p.x,a.vel[1]*.55+p.y,a.vel[2]*.55+p.z]}a.pos=[a.pos[0]+a.vel[0]*t,a.pos[1]+a.vel[1]*t,a.pos[2]+a.vel[2]*t],a.fireCd-=t,a.fireCd<=0&&l<4e3&&(a.fireCd=this.easy?6:c?1.7:2.5+Math.random()*2,this.enemyFire(a)),a.mesh.position.set(a.pos[0]-e.camPos[0],a.pos[1]-e.camPos[1],a.pos[2]-e.camPos[2]),c?a.mesh.lookAt(a.mesh.position.x+a.vel[0],a.mesh.position.y+a.vel[1],a.mesh.position.z+a.vel[2]):a.mesh.rotation.y+=t*2,l>6e4&&(e.scene.remove(a.mesh),this.enemies.splice(r,1))}for(let r=this.bolts.length-1;r>=0;r--){const a=this.bolts[r];a.life-=t,a.pos=[a.pos[0]+a.vel[0]*t,a.pos[1]+a.vel[1]*t,a.pos[2]+a.vel[2]*t],a.mesh.position.set(a.pos[0]-e.camPos[0],a.pos[1]-e.camPos[1],a.pos[2]-e.camPos[2]);let o=a.life<=0;if(!o&&a.hostile)re(ee(a.pos,e.camPos))<40&&(o=!0,this.easy||(this.shield>0?this.shield=Math.max(0,this.shield-12):this.hull-=12,this.beep(90,.25,"sawtooth",.09),this.onToast(this.hull<=0?"💥 Ship destroyed! Respawning at Earth…":"💢 Hit! Hull damaged"),this.hull<=0&&this.respawn(),this.onChange()));else if(!o&&!a.hostile){for(let l=this.rocks.length-1;l>=0;l--)if(re(ee(a.pos,this.rocks[l].pos))<this.rocks[l].r+20){this.rocks[l].hp-=1+this.levels.damage,o=!0,this.rocks[l].hp<=0&&this.breakRock(l,!0);break}if(!o){for(let l=0;l<this.enemies.length;l++)if(re(ee(a.pos,this.enemies[l].pos))<70){this.enemies[l].hp-=1+this.levels.damage,o=!0,this.beep(440,.05,"square",.03),this.enemies[l].hp<=0&&this.killEnemy(l);break}}}o&&(e.scene.remove(a.mesh),this.bolts.splice(r,1))}}lastLanded=null;respawn(){this.hull=100;const t=this.objMap.get("earth");this.engine.camPos=[t.worldPos[0],t.worldPos[1]+3e4,t.worldPos[2]+3e4];for(const e of this.enemies)this.engine.scene.remove(e.mesh);this.enemies=[]}missionTargetHint(){const t=this.mission;if(!t)return"All missions complete, Commander. 🎖️";if(t.wave&&this.waveLeft>0)return`${t.text} (${this.waveLeft} left)`;if(t.wave)return t.text;const e=this.objMap.get(t.targetId);return`${t.text} — ${qn(re(ee(e.worldPos,this.engine.camPos)))} away`}startWaveIfNeeded(){const t=this.mission;t?.wave&&this.waveLeft===0&&this.enemies.length===0&&(this.waveLeft=t.wave,this.spawnWave(t.wave))}warpToMission(){const t=this.mission;t?.targetId&&this.engine.flyTo(this.objMap.get(t.targetId))}}const Jt=i=>document.getElementById(i);function Fe(i,t,e="",n){const s=document.createElement(i);return s.className=t,e&&(s.innerHTML=e),n?.appendChild(s),s}class rg{constructor(t,e,n){this.engine=t,this.game=e,this.objMap=n,this.buildCatalog(),this.buildInfo(),this.buildHud(),this.buildHelp(),e.onToast=(s,r)=>this.toast(s,r),e.onChange=()=>this.refreshGame(),t.onSelect=s=>this.showInfo(s)}toastBox=Fe("div","toasts","",document.body);onWalk=()=>{};toast(t,e=!1){const n=Fe("div","toast"+(e?" big":""),t,this.toastBox);setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),600)},e?3500:2200)}buildCatalog(){const t=Jt("catalog"),e=["solar","stars","exotic","deep","hypo"];for(const r of e){const a=Fe("details","cat-group",`<summary>${Bm[r]}</summary>`,t);r==="solar"&&(a.open=!0);for(const o of Ci.filter(l=>l.group===r)){const l=Fe("div","cat-item",`${o.emoji??"·"} ${o.name}${o.flags?.some(c=>c.includes("THEO")||c.includes("HYPO"))?' <span class="tag">?</span>':""}`,a);l.onclick=()=>this.engine.flyTo(this.objMap.get(o.id))}}const n=Jt("search"),s=Jt("search-list");for(const r of Ci)Fe("option","","",s).setAttribute("value",r.name);n.addEventListener("change",()=>{const r=Ci.find(a=>a.name.toLowerCase()===n.value.toLowerCase());r&&(this.engine.flyTo(this.objMap.get(r.id)),n.value="",n.blur())})}buildInfo(){}showInfo(t){const e=Jt("info");if(!t){e.style.display="none";return}const n=t.body;e.style.display="block";const s=(n.flags??[]).map(l=>`<span class="badge ${l.includes("HYPO")||l.includes("THEO")?"warn":""}">${l}</span>`).join(" "),r=[];n.radiusKm>0&&r.push(`<tr><td>Radius</td><td>${Wm(n.radiusKm)}</td></tr>`),n.mass&&r.push(`<tr><td>Mass</td><td>${n.mass}</td></tr>`),n.temp&&r.push(`<tr><td>Temp</td><td>${n.temp}</td></tr>`),r.push(`<tr><td>From Sun</td><td>${qn(re(t.worldPos))}</td></tr>`),r.push('<tr><td>From you</td><td id="info-dist">…</td></tr>');const a=["planet","dwarf","moon"].includes(n.kind)&&!["jupiter","saturn","uranus","neptune"].includes(n.id);e.innerHTML=`
      <button class="x" id="info-x">×</button>
      <h2>${n.emoji??""} ${n.name}</h2>
      <div class="type">${n.type}</div>
      ${s?`<div class="flags">${s}</div>`:""}
      <table>${r.join("")}</table>
      <p>${n.fact}</p>
      <div class="btns">
        <button id="info-go">🚀 Warp here</button>
        ${a?'<button id="info-walk">🚶 Land & walk</button>':""}
      </div>
      <div class="src">Data: NASA/JPL · ESA Gaia · EHT${n.kind==="blackhole"?" — fly close for gravitational lensing":""}</div>`,Jt("info-x").onclick=()=>this.engine.select(null),Jt("info-go").onclick=()=>this.engine.flyTo(t);const o=document.getElementById("info-walk");o&&(o.onclick=()=>{this.engine.flyTo(t),this.pendingWalk=n.id})}pendingWalk=null;buildHud(){const t=[["⏸",0],["real",1],["1 hr/s",3600],["1 day/s",86400],["1 mo/s",26e5],["1 yr/s",315e5],["100 yr/s",315e7]],e=Jt("timectl");for(const[a,o]of t){const l=Fe("button","tbtn"+(o===1?" on":""),a,e);l.onclick=()=>{this.engine.paused=o===0,o>0&&(this.engine.simSpeed=o),e.querySelectorAll(".tbtn").forEach(c=>c.classList.remove("on")),l.classList.add("on")}}const n=Jt("upgrades"),s=Fe("div","up-body","",n),r=()=>{s.innerHTML="";for(const a of oc){const o=this.game.levels[a.id],l=this.game.cost(a.id),c=Fe("div","up-row",`<b>${a.name}</b> <span class="lvl">Lv ${o}</span><br><small>${a.desc}</small>`,s),h=Fe("button","buy",`${l} pts`,c);h.disabled=this.game.score<l,h.onclick=()=>{this.game.buy(a.id)?this.toast(`Upgraded: ${a.name}`):this.toast("Not enough points!"),r()}}};Jt("btn-upgrades").onclick=()=>{n.classList.toggle("open"),r()},Jt("btn-mission-warp").onclick=()=>this.game.warpToMission()}refreshGame(){Jt("score").textContent=String(this.game.score);const t=Jt("hull");t.style.width=`${Math.max(this.game.hull,0)}%`,t.className=this.game.hull>50?"ok":this.game.hull>25?"mid":"low",Jt("shield").style.width=`${Math.min(this.game.shield,100)}%`}tick(){this.drawRadar();const t=this.engine;Jt("hud-dist").textContent=qn(t.distFromSun())+" from Sun";const e=t.objs.reduce((r,a)=>{const o=re(ee(a.worldPos,t.camPos))-a.body.radiusKm;return o<r.d?{d:o,o:a}:r},{d:1/0,o:null});Jt("hud-alt").textContent=e.o?`${qn(Math.max(e.d,0))} above ${e.o.body.name}`:"",Jt("hud-speed").textContent=qn(t.adaptiveSpeed()*this.game.speedFactor)+"/s",Jt("hud-date").textContent=new Date(t.simTimeMs).toISOString().slice(0,10),Jt("mission").textContent=this.game.missionTargetHint(),document.body.classList.contains("cockpit")&&(Jt("cp-spd").textContent=qn(t.adaptiveSpeed()*this.game.speedFactor)+"/s",Jt("cp-hull").textContent=`${Math.max(this.game.hull,0)}%`,Jt("cp-shd").textContent=String(this.game.shield),Jt("cp-pts").textContent=String(this.game.score),Jt("cp-tgt").textContent=this.game.missionTargetHint().replace(/^.*?— /,"").slice(0,34)||"—");const n=t.selected,s=document.getElementById("info-dist");n&&s&&(s.textContent=qn(re(ee(n.worldPos,t.camPos))))}drawRadar(){const t=Jt("radar"),e=t.getContext("2d"),n=t.width,s=n/2,r=s-6,a=6e3;e.clearRect(0,0,n,n),e.strokeStyle="rgba(120,180,255,.25)";for(const d of[r,r*.55])e.beginPath(),e.arc(s,s,d,0,7),e.stroke();const o=performance.now()/1600%(Math.PI*2);e.strokeStyle="rgba(120,220,255,.3)",e.beginPath(),e.moveTo(s,s),e.lineTo(s+Math.sin(o)*r,s-Math.cos(o)*r),e.stroke();const l=this.engine.quat.clone().invert(),c=new R,h=(d,p,g,_=!1)=>{c.set(d[0],d[1],d[2]).applyQuaternion(l);let m=c.x/a,f=c.z/a;const S=Math.hypot(m,f);if(S>.94){if(!_)return;m=m/S*.94,f=f/S*.94}e.fillStyle=p,e.beginPath(),e.arc(s+m*r,s+f*r,g,0,7),e.fill()};for(const d of this.game.enemies)h(ee(d.pos,this.engine.camPos),d.kind==="fighter"?"#ff8833":"#ff4466",3);for(const d of this.game.rocks)h(ee(d.pos,this.engine.camPos),"rgba(190,190,190,.8)",2);const u=this.game.mission;u?.targetId&&h(ee(this.objMap.get(u.targetId).worldPos,this.engine.camPos),"#ffd97a",4,!0),e.fillStyle="#7adcff",e.beginPath(),e.arc(s,s,2.5,0,7),e.fill()}buildHelp(){Jt("btn-help").onclick=()=>Jt("help").classList.toggle("open"),Jt("help-x").onclick=()=>Jt("help").classList.remove("open")}}class ag{constructor(t,e,n){this.engine=t,this.game=e,this.objMap=n,this.bar=Fe("div","kidbar","",document.body),this.card=Fe("div","kidcard","",document.body);const s=Fe("div","kidstrip","",this.bar);for(const a of Ns){const o=no.get(a),l=Fe("button","kidbtn",`<span class="e">${o.emoji??"⭐"}</span><span>${o.name.split(" ")[0]}</span>`,s);l.onclick=()=>this.visit(a)}const r=Fe("button","kidbtn next",'<span class="e">➡️</span><span>Next!</span>',this.bar);r.onclick=()=>this.visit(Ns[(this.stopIdx+1)%Ns.length])}active=!1;stopIdx=-1;bar;card;toggle(t){this.active=t,this.game.easy=t,document.body.classList.toggle("kid-mode",t),this.bar.style.display=t?"flex":"none",this.card.style.display="none",t?(this.engine.simSpeed=86400,this.say("Welcome to space, Captain! Tap a picture to fly there!"),this.visit("earth")):speechSynthesis?.cancel()}visit(t){this.stopIdx=Ns.indexOf(t);const e=this.objMap.get(t);this.engine.flyTo(e,{dur:7,standoffR:5});const n=e.body,s=n.kidFact??n.fact;this.card.style.display="block",this.card.innerHTML=`<div class="big">${n.emoji??"⭐"} ${n.name}</div><div class="fact">${s}</div>
      <button class="kidsay">🔊 Read to me!</button>`,this.card.querySelector(".kidsay").onclick=()=>this.say(`${n.name}. ${s.replace(/[🌙🪐☀️⭐🕳️]/gu,"")}`),this.say(n.name)}say(t){try{speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);e.rate=.92,e.pitch=1.1,speechSynthesis.speak(e)}catch{}}}const og="modulepreload",lg=function(i){return"/cosmos/"+i},Ml={},cg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(l=>{if(l=lg(l),l in Ml)return;Ml[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":og,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class hg{constructor(t,e,n){this.engine=t,this.game=e,this.onStatus=n}active=!1;video=null;landmarker=null;raf=0;async toggle(){if(this.active)return this.stop(),!1;try{this.onStatus("Loading hand tracking…");const t=await cg(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs"),[]),e=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");this.landmarker=await t.HandLandmarker.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"},numHands:1,runningMode:"VIDEO"});const n=await navigator.mediaDevices.getUserMedia({video:{width:320,height:240}});this.video=document.createElement("video"),this.video.srcObject=n,this.video.autoplay=!0,this.video.className="handcam",document.body.appendChild(this.video),this.active=!0,this.onStatus("🖐 Hand control ON — move hand to steer, pinch to fly, fist to fire");const s=()=>{if(this.active){if(this.video.readyState>=2){const a=this.landmarker.detectForVideo(this.video,performance.now()).landmarks?.[0];if(a){const o=a[9];this.engine.yaw+=(o.x-.5)*.06,this.engine.pitch=Math.max(-1.5,Math.min(1.5,this.engine.pitch+(o.y-.5)*-.06)),Math.hypot(a[4].x-a[8].x,a[4].y-a[8].y)<.06&&this.engine.moveForward(.03);const c=[8,12,16,20].every(h=>Math.hypot(a[h].x-a[0].x,a[h].y-a[0].y)<.22);this.game.firing=c}else this.game.firing=!1}this.raf=requestAnimationFrame(s)}};return s(),!0}catch{return this.onStatus("Hand tracking unavailable (camera blocked or offline)"),this.stop(),!1}}stop(){this.active=!1,cancelAnimationFrame(this.raf),this.game.firing=!1,this.video&&(this.video.srcObject?.getTracks().forEach(t=>t.stop()),this.video.remove(),this.video=null),this.landmarker?.close?.(),this.landmarker=null,this.onStatus("Hand control off")}}const ug=`
precision highp float;
uniform vec3 uCam;        // camera position in units of rs, relative to BH
uniform mat3 uBasis;      // camera orientation
uniform vec2 uRes;
uniform float uTime;
uniform float uSteps;     // quality
uniform float uDiskTint;  // 0..1 hue shift per BH

float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }

vec3 stars(vec3 d) {
  vec3 col = vec3(0.0);
  vec3 cell = floor(d * 380.0);
  float h = hash(cell);
  if (h > 0.9965) {
    float b = (h - 0.9965) / 0.0035;
    col += vec3(0.9 + 0.1 * hash(cell + 1.0), 0.9, 0.85 + 0.15 * hash(cell + 2.0)) * b * 1.6;
  }
  // galactic band
  float band = exp(-abs(d.y + 0.25 * d.x) * 4.0);
  col += vec3(0.10, 0.09, 0.13) * band;
  return col;
}

vec3 diskColor(vec3 p, vec3 rd) {
  float r = length(p.xz);
  float t = clamp((r - 2.6) / 7.4, 0.0, 1.0);
  // Keplerian tangential velocity (geometric-ish units)
  vec3 tangent = normalize(vec3(-p.z, 0.0, p.x));
  float speed = 0.35 / sqrt(max(r * 0.5, 1.0));
  float dop = 1.0 / (1.0 - speed * dot(tangent, rd));
  float beam = pow(dop, 3.0);
  float redshift = sqrt(max(1.0 - 1.0 / max(r, 1.01), 0.05));
  // temperature falls outward: white-hot inner edge -> deep orange rim
  vec3 c = mix(vec3(1.0, 0.97, 0.92), mix(vec3(1.0, 0.55, 0.15), vec3(1.0, 0.45 + uDiskTint * 0.3, 0.3), uDiskTint), t);
  float swirl = 0.75 + 0.25 * sin(atan(p.z, p.x) * 9.0 + uTime * 0.7 - r * 2.2);
  float fade = (1.0 - t) * smoothstep(2.55, 2.9, r);
  return c * beam * redshift * swirl * fade * 1.4;
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 rd = normalize(uBasis * vec3(uv, -1.6));
  vec3 p = uCam;
  vec3 v = rd;
  vec3 col = vec3(0.0);
  float h2 = dot(cross(p, v), cross(p, v));
  bool captured = false;
  float prevY = p.y;
  for (float i = 0.0; i < 300.0; i++) {
    if (i >= uSteps) break;
    float r = length(p);
    if (r < 1.02) { captured = true; break; }
    if (r > 90.0 && dot(p, v) > 0.0) break;
    float dt = clamp(r * 0.09, 0.045, 1.2);
    // geodesic bending
    v += -1.5 * h2 * p / pow(r, 5.0) * dt;
    p += v * dt;
    // disk crossing (equatorial plane, 2.6..10 rs)
    if (sign(p.y) != sign(prevY)) {
      float rx = length(p.xz);
      if (rx > 2.6 && rx < 10.0) col += diskColor(p, normalize(v));
    }
    prevY = p.y;
  }
  if (!captured) col += stars(normalize(v));
  // subtle vignette
  col *= 1.0 - 0.25 * dot(uv * 0.5, uv * 0.5);
  gl_FragColor = vec4(pow(col, vec3(0.85)), 1.0);
}`;class dg{constructor(t){this.renderer=t,this.mat=new cn({uniforms:{uCam:{value:new R(0,1,20)},uBasis:{value:new It},uRes:{value:new St(1,1)},uTime:{value:0},uSteps:{value:220},uDiskTint:{value:0}},fragmentShader:ug,vertexShader:"void main(){gl_Position=vec4(position.xy,0.,1.);}",depthTest:!1,depthWrite:!1}),this.scene.add(new Ot(new ki(2,2),this.mat))}active=!1;mode="auto";autoSteps=140;ema=16;scene=new Ja;cam=new ja(-1,1,1,-1,0,1);mat;target=null;tune(t){!this.active||this.mode!=="auto"||(this.ema=this.ema*.92+t*.08,this.ema>40&&this.autoSteps>36?this.autoSteps=Math.max(36,this.autoSteps*.85):this.ema<20&&this.autoSteps<220&&(this.autoSteps=Math.min(220,this.autoSteps*1.06)))}get label(){return this.mode==="auto"?`AUTO·${Math.round(this.autoSteps)}`:this.mode.toUpperCase()}update(t,e,n){if(this.mode==="off")return this.active=!1,this.target=null,!1;let s=null,r=1/0;for(const h of n){const d=re(ee(h.worldPos,t))/h.body.radiusKm;d<r&&(r=d,s=h)}if(!s||r>60)return this.active=!1,this.target=null,!1;this.active=!0,this.target=s;const a=s.body.radiusKm,o=ee(t,s.worldPos),l=this.mat.uniforms;l.uCam.value.set(o[0]/a,o[1]/a,o[2]/a);const c=l.uCam.value.length();return c<2.4&&l.uCam.value.multiplyScalar(2.4/c),l.uBasis.value.setFromMatrix4(new te().makeRotationFromQuaternion(e)),l.uRes.value.set(innerWidth*this.renderer.getPixelRatio(),innerHeight*this.renderer.getPixelRatio()),l.uTime.value=performance.now()/1e3,l.uSteps.value=this.mode==="high"?220:this.mode==="low"?56:this.autoSteps,l.uDiskTint.value=s.body.id==="sgra"?.15:s.body.id==="ton618"?.5:0,this.renderer.render(this.scene,this.cam),!0}}const fg={earth:{ground:5077562,sky:8895720,horizon:13624565,g:9.81,weather:"rain",life:!0,desc:"Home. Air you can breathe, water, life everywhere."},moon:{ground:9079429,sky:5,horizon:1118484,g:1.62,airless:!0,desc:"No air, 1/6 gravity — you can JUMP. Footprints last a million years."},mars:{ground:10834479,sky:14263928,horizon:15254682,g:3.71,weather:"dust",desc:"Butterscotch sky, rusty dust, 38% gravity. Dust storms can swallow the planet."},mercury:{ground:9076596,sky:5,horizon:855312,g:3.7,airless:!0,desc:"Airless and extreme: 427 °C in day, −173 °C at night."},venus:{ground:10123850,sky:14268778,horizon:15256970,g:8.87,desc:"Crushing CO₂ air, 464 °C. Real visits last minutes (ask the Soviet Venera probes)."},pluto:{ground:12101006,sky:657940,horizon:2763322,g:.62,airless:!0,weather:"snow",desc:"Nitrogen-ice plains at −229 °C. The Sun is just a very bright star here."},titan:{ground:8018992,sky:13208122,horizon:14723410,g:1.35,weather:"methane-rain",desc:"Thick orange haze and drizzle of liquid methane. You could FLY here by flapping strapped-on wings."},europa:{ground:13620441,sky:8,horizon:1315868,g:1.31,airless:!0,desc:"Cracked ice over a hidden ocean. Jupiter fills the sky."},enceladus:{ground:15266036,sky:8,horizon:1052696,g:.11,airless:!0,weather:"snow",desc:"Gravity so weak (1% of Earth) a good jump takes you a kilometre high."},io:{ground:13217856,sky:6,horizon:1709064,g:1.8,airless:!0,desc:"Sulfur plains and constant volcanic eruptions."},ganymede:{ground:9407104,sky:6,horizon:1052692,g:1.43,airless:!0,desc:"The biggest moon in the solar system, under Jupiter's glare."},triton:{ground:12893358,sky:8,horizon:1315872,g:.78,airless:!0,weather:"snow",desc:"Nitrogen geysers erupt through pink ice."},ceres:{ground:8222830,sky:5,horizon:921106,g:.28,airless:!0,desc:"A salty dwarf planet — those bright spots are real."},charon:{ground:9736330,sky:10,horizon:1447454,g:.29,airless:!0,desc:"Pluto hangs frozen in the sky, never moving."}},Sl={ground:9077624,sky:6,horizon:1052692,g:3,airless:!0,desc:"An unexplored surface."};let Na=1;const Le=()=>(Na=Na*16807%2147483647)/2147483647,Os=(i,t,e)=>{const n=Math.sin(i*12.9898+t*78.233+e)*43758.5453;return n-Math.floor(n)};function Yr(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=Os(n,s,e),h=Os(n+1,s,e),u=Os(n,s+1,e),d=Os(n+1,s+1,e);return c+(h-c)*o+(u-c)*l+(c-h-u+d)*o*l}const El=(i,t,e)=>Yr(i,t,e)*.55+Yr(i*2.3,t*2.3,e+7)*.28+Yr(i*5.1,t*5.1,e+13)*.17;class pg{constructor(t){this.renderer=t,addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()})}active=!1;imagination=!1;scene=new Ja;camera=new ke(70,1,.05,4e3);pos=new R(0,2,0);velY=0;yaw=0;pitch=0;cfg=Sl;body=null;heightSeed=1;critters=[];particles=null;onExit=()=>{};height(t,e){const n=this.cfg.airless?14:8;return(El(t*.012,e*.012,this.heightSeed)-.5)*n*2+(El(t*.0015,e*.0015,this.heightSeed+99)-.5)*30}enter(t,e){this.body=t,this.cfg=fg[t.id]??Sl,this.imagination=e&&!this.cfg.life,this.heightSeed=t.id.length*31+t.id.charCodeAt(0),Na=this.heightSeed,this.scene.clear(),this.critters=[],this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix();const n=1600,s=128,r=new ki(n,n,s,s);r.rotateX(-Math.PI/2);const a=r.attributes.position;for(let c=0;c<a.count;c++)a.setY(c,this.height(a.getX(c),a.getZ(c)));r.computeVertexNormals();const o=new Ot(r,new Yi({color:this.cfg.ground}));this.scene.add(o),this.scene.background=new Ct(this.cfg.sky),this.scene.fog=this.cfg.airless?null:new Za(this.cfg.horizon,60,1400);const l=new km(16774365,this.cfg.airless?2.2:1.6);if(l.position.set(.5,.8,.3),this.scene.add(l,new rc(this.cfg.airless?2241348:8952234,this.cfg.airless?.5:.9)),this.cfg.airless){const h=new Float32Array(3600);for(let d=0;d<1200;d++){const p=Le()*2-1,g=Le()*Math.PI*2,_=Math.sqrt(1-p*p);h[d*3]=_*Math.cos(g)*3e3,h[d*3+1]=Math.abs(p)*3e3,h[d*3+2]=_*Math.sin(g)*3e3}const u=new oe;u.setAttribute("position",new ne(h,3)),this.scene.add(new tr(u,new Qs({color:16777215,size:2.4,sizeAttenuation:!1})))}if(this.particles=null,this.cfg.weather){const h=new Float32Array(7500);for(let p=0;p<2500;p++)h[p*3]=(Le()-.5)*300,h[p*3+1]=Le()*120,h[p*3+2]=(Le()-.5)*300;const u=new oe;u.setAttribute("position",new ne(h,3));const d={rain:10075118,"methane-rain":14262346,dust:13208154,snow:16777215}[this.cfg.weather];this.particles=new tr(u,new Qs({color:d,size:this.cfg.weather==="dust"?1.2:2,transparent:!0,opacity:.7,sizeAttenuation:!1})),this.scene.add(this.particles)}if(this.cfg.life||this.imagination){const c=!this.cfg.life;for(let h=0;h<120;h++){const u=(Le()-.5)*1200,d=(Le()-.5)*1200,p=this.height(u,d),g=new Ye;if(c){const _=new Ot(new Ni(.15,.4,3+Le()*6,5),new Yi({color:4251840})),m=new Ot(new De(.8+Le(),8,6),new Te({color:[16740569,7405529,14266623][h%3]}));m.position.y=_.geometry.parameters.height/2+.5,_.position.y=_.geometry.parameters.height/2,g.add(_,m)}else{const _=3+Le()*5,m=new Ot(new Ni(.25,.4,_,6),new Yi({color:6965802})),f=new Ot(new Fi(1.6+Le()*1.4,_*.9,7),new Yi({color:3107375}));m.position.y=_/2,f.position.y=_*1.1,g.add(m,f)}g.position.set(u,p,d),this.scene.add(g)}for(let h=0;h<14;h++){const u=new Ye,d=new Ot(new De(.5,8,6),new Yi({color:c?11567359:10123866})),p=new Ot(new De(.3,8,6),d.material);if(p.position.set(.5,.35,0),u.add(d,p),c){const m=new Ot(new De(.15,6,4),new Te({color:16777096}));m.position.y=.8,u.add(m)}else for(const m of[-1,1]){const f=new Ot(new Fi(.1,.5,4),d.material);f.position.set(.5,.7,m*.15),u.add(f)}const g=(Le()-.5)*400,_=(Le()-.5)*400;u.position.set(g,this.height(g,_)+.5,_),this.scene.add(u),this.critters.push({m:u,a:Le()*Math.PI*2,t:Le()*3})}}this.pos.set(0,this.height(0,0)+1.7,0),this.yaw=0,this.pitch=0,this.velY=0,this.active=!0}exit(){this.active=!1,this.onExit()}update(t,e){if(!this.active)return!1;const n=e.has("ShiftLeft")?14:6,s=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=new R(s.z,0,-s.x).negate(),a=new R;(e.has("KeyW")||e.has("ArrowUp"))&&a.add(s),(e.has("KeyS")||e.has("ArrowDown"))&&a.sub(s),(e.has("KeyA")||e.has("ArrowLeft"))&&a.sub(r),(e.has("KeyD")||e.has("ArrowRight"))&&a.add(r),a.lengthSq()&&a.normalize().multiplyScalar(n*t),this.pos.add(a);const o=this.height(this.pos.x,this.pos.z)+1.7;if(this.velY-=this.cfg.g*t,e.has("Space")&&this.pos.y<=o+.05&&(this.velY=Math.sqrt(2*this.cfg.g*(this.cfg.g<2?8:1.2))),this.pos.y+=this.velY*t,this.pos.y<o&&(this.pos.y=o,this.velY=0),this.pos.x=Math.max(-760,Math.min(760,this.pos.x)),this.pos.z=Math.max(-760,Math.min(760,this.pos.z)),this.camera.position.copy(this.pos),this.camera.quaternion.setFromEuler(new Be(this.pitch,this.yaw,0,"YXZ")),this.particles){const l=this.particles.geometry.attributes.position,c={rain:40,"methane-rain":6,dust:3,snow:4}[this.cfg.weather]??5,h=this.cfg.weather==="dust"?25:4;for(let u=0;u<l.count;u++){let d=l.getY(u)-c*t,p=l.getX(u)+h*t;d<0&&(d=120,p=this.pos.x+(Math.random()-.5)*300,l.setZ(u,this.pos.z+(Math.random()-.5)*300)),p>this.pos.x+150&&(p=this.pos.x-150),l.setY(u,d),l.setX(u,p)}l.needsUpdate=!0}for(const l of this.critters){l.t-=t,l.t<=0&&(l.t=1+Math.random()*3,l.a=Math.random()*Math.PI*2);const c=2;l.m.position.x+=Math.cos(l.a)*c*t,l.m.position.z+=Math.sin(l.a)*c*t,l.m.position.y=this.height(l.m.position.x,l.m.position.z)+.5+Math.abs(Math.sin(performance.now()/180+l.a))*.4,l.m.rotation.y=-l.a}return this.renderer.render(this.scene,this.camera),!0}look(t,e){this.yaw-=t*.0025,this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch-e*.0025))}}let mg=null,jr=null;function gg(){return mg??=new AudioContext}function _g(i){const t=i.createBuffer(1,i.sampleRate*2,i.sampleRate),e=t.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1;return t}function lc(i){if(jr?.stop(),jr=null,!!i)try{const t=gg();t.resume();const e=t.createBufferSource();e.buffer=_g(t),e.loop=!0;const n=t.createBiquadFilter(),s=t.createGain(),r=t.createOscillator(),a=t.createGain();n.type=i==="rain"||i==="methane-rain"?"highpass":"lowpass",n.frequency.value={rain:1200,"methane-rain":600,dust:300,snow:150,wind:220}[i],s.gain.value={rain:.06,"methane-rain":.04,dust:.05,snow:.015,wind:.04}[i],r.frequency.value=.13,a.gain.value=s.gain.value*.6,r.connect(a).connect(s.gain),e.connect(n).connect(s).connect(t.destination),e.start(),r.start(),jr={stop:()=>{try{e.stop(),r.stop(),s.disconnect()}catch{}}}}catch{}}document.getElementById("build").textContent="build 2026-07-04 02:42 UTC";console.log("COSMOS build 2026-07-04 02:42 UTC");const hr=document.getElementById("c"),zt=new Gm(hr),is=jm(zt),sn=new sg(zt,is),ln=new rg(zt,sn,is),Zn=new ag(zt,sn,is),cc=new hg(zt,sn,i=>ln.toast(i)),Ne=new dg(zt.renderer),Ee=new pg(zt.renderer),vg=new Vm(document.getElementById("labels"),zt);{let i=20260704;const t=()=>(i=i*48271%2147483647)/2147483647,e=5e3,n=new Float32Array(e*3),s=new Float32Array(e*3);for(let a=0;a<e;a++){const o=t()*2-1,l=t()*Math.PI*2,c=(4+Math.pow(t(),1.5)*3996)*ue,h=Math.sqrt(1-o*o);n[a*3]=h*Math.cos(l)*c,n[a*3+1]=o*c*.35,n[a*3+2]=h*Math.sin(l)*c;const u=t();s[a*3]=.7+u*.3,s[a*3+1]=.75+u*.2,s[a*3+2]=.8+(1-u)*.2}const r=new oe;r.setAttribute("position",new ne(n,3)),r.setAttribute("color",new ne(s,3)),zt.addCloud(r,[0,0,0],{size:1.3,opacity:.8})}{const i=is.get("earth");i.update?.(zt.simTimeMs);const t=re(i.worldPos),e=[-i.worldPos[0]/t,-i.worldPos[1]/t,-i.worldPos[2]/t];zt.camPos=[i.worldPos[0]+e[0]*3e4+12e3,i.worldPos[1]+e[1]*3e4+8e3,i.worldPos[2]+e[2]*3e4],zt.flyTo(i,{dur:.1,standoffR:6}),setTimeout(()=>zt.select(null),200)}const xg=zt.objs.filter(i=>i.body.kind==="blackhole"),bl=document.getElementById("btn-kid");bl.onclick=()=>{Zn.toggle(!Zn.active),bl.textContent=Zn.active?"👨 Grown-up mode":"🧒 Kid mode"};document.getElementById("btn-hands").onclick=()=>cc.toggle();const sr=document.getElementById("btn-lens"),$r=["auto","high","low","off"];sr.onclick=()=>{Ne.mode=$r[($r.indexOf(Ne.mode)+1)%$r.length],sr.textContent=`Lensing: ${Ne.label}`};sr.textContent=`Lensing: ${Ne.label}`;const hc=document.getElementById("btn-cockpit"),uc=()=>{const i=document.body.classList.toggle("cockpit");hc.textContent=i?"🌌 Exterior":"🎛 Cockpit",ln.toast(i?"🎛 Cockpit view — V to exit":"Exterior view")};hc.onclick=uc;const wl=document.getElementById("btn-inflate");wl.onclick=()=>{zt.inflate=zt.inflate===1?50:zt.inflate===50?1e3:1,wl.textContent=`🔍 Inflate ×${zt.inflate}`,ln.toast(zt.inflate===1?"True scale":`⚠ Planet sizes exaggerated ×${zt.inflate} — NOT to scale`)};addEventListener("keydown",i=>{i.target?.tagName!=="INPUT"&&(i.code==="Space"&&(i.preventDefault(),Ee.active||(sn.firing=!0)),i.code==="KeyN"&&sn.warpToMission(),i.code==="KeyV"&&!Ee.active&&uc(),i.code==="Escape"&&Ee.active&&pc())});addEventListener("keyup",i=>{i.code==="Space"&&(sn.firing=!1)});hr.addEventListener("pointerdown",i=>{Ee.active||i.button===0&&(i.ctrlKey||i.metaKey)&&(sn.firing=!0)});addEventListener("pointerup",()=>{cc.active||(sn.firing=!1)});hr.addEventListener("pointermove",i=>{Ee.active&&i.buttons&1&&Ee.look(i.movementX,i.movementY)});const dc=document.getElementById("surface-hud");function fc(i){const t=is.get(i);Ee.enter(t.body,Zn.active),document.body.classList.add("walking"),dc.style.display="flex",document.getElementById("surf-name").textContent=`🚶 ${t.body.name} — gravity ${Ee.cfg.g} m/s² · ${Ee.cfg.desc}`+(Ee.imagination?" · 🎨 imagination mode: the plants & critters are pretend!":""),lc(Ee.cfg.weather??(Ee.cfg.airless?null:"wind")),Zn.active&&Zn.say(`You landed on ${t.body.name}! ${Ee.cfg.desc}`)}function pc(){Ee.exit(),document.body.classList.remove("walking"),dc.style.display="none",lc(null),ln.toast("🚀 Back in the ship")}document.getElementById("btn-takeoff").onclick=pc;Ee.onExit=()=>{};setInterval(()=>{if(ln.pendingWalk&&!zt.travel){const i=ln.pendingWalk;ln.pendingWalk=null,fc(i)}},400);hr.addEventListener("dblclick",()=>{if(Ee.active)return;const i=zt.objs.find(t=>["planet","dwarf","moon"].includes(t.body.kind)&&!["jupiter","saturn","uranus","neptune"].includes(t.body.id)&&re(ee(t.worldPos,zt.camPos))<t.body.radiusKm*1.5);i&&fc(i.body.id)});let Tl=0;function mc(){requestAnimationFrame(mc);const i=Math.min((performance.now()-zt.lastFrame)/1e3,.1);if(Ee.active){zt.lastFrame=performance.now(),Ee.update(i,zt.keys);return}const t=zt.speedMult;zt.speedMult=t*sn.speedFactor;const e=zt.frame();zt.speedMult=t,sn.update(e),sn.startWaveIfNeeded(),Ne.update(zt.camPos,zt.quat,xg),Ne.tune(e*1e3),Ne.active&&Ne.mode==="auto"&&Tl%30===0&&(sr.textContent=`Lensing: ${Ne.label}`),Ne.active&&Ne.target&&(document.getElementById("hud-alt").textContent=`⚫ ${(re(ee(Ne.target.worldPos,zt.camPos))/Ne.target.body.radiusKm).toFixed(1)} Schwarzschild radii from ${Ne.target.body.name}`);const n=zt.cmbMat;if(n){const s=zt.distFromSun();n.opacity=.3*Math.min(Math.max((Math.log10(Math.max(s,1))-21.5)/1.5,0),1),n.visible=n.opacity>.01}vg.update(Zn.active),++Tl%6===0&&(ln.tick(),ln.refreshGame())}requestAnimationFrame(mc);ln.toast("Welcome to COSMOS — drag to look, W to fly, click anything. Press ? for help",!0);
