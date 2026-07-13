import { html_on } from "./html_on.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
export function html_on_click(component, lambda) {
  let name_event = "click";
  html_on(component, name_event, lambda);
  html_cursor_pointer(component);
}
