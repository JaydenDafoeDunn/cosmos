# ============================================================================
# EventBus (autoload) — global pub/sub (design doc §12).
# Systems communicate ONLY through this; no system holds a reference to
# another system's internals.
#
# Bus rule from the doc: subscribers must NOT mutate gameplay state
# synchronously inside a handler (prevents event-storm reentrancy). Handlers
# should read + present, or enqueue an intent for the next tick.
# ============================================================================
extends Node

var _subs: Dictionary = {}  # event_name: String -> Array[Callable]

func subscribe(event_name: String, cb: Callable) -> void:
	if not _subs.has(event_name):
		_subs[event_name] = []
	_subs[event_name].append(cb)

func unsubscribe(event_name: String, cb: Callable) -> void:
	if _subs.has(event_name):
		_subs[event_name].erase(cb)

func publish(event_name: String, payload: Dictionary = {}) -> void:
	if not _subs.has(event_name):
		return
	# duplicate() so a handler that (un)subscribes mid-dispatch can't corrupt iteration
	for cb in _subs[event_name].duplicate():
		if cb.is_valid():
			cb.call(payload)
