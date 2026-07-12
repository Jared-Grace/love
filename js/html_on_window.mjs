import { html_on } from "./html_on.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_on_window(name, lambda) {
  let w = html_component_wrap(window);
  html_on(w, name, lambda);
}
