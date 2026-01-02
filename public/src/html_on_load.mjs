import { html_on } from "../../../love/public/src/html_on.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_on_load(lambda) {
  const name = "load";
  let w = html_component_wrap(window);
  html_on(w, name, lambda);
}
