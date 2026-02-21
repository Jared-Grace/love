export function html_on_keydown_stop_logic(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}
