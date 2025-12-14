export function on_keydown_stop(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}
