import { html_on } from "../../../love/public/src/html_on.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_on_load(lambda) {
  let w = html_component_wrap(window);
  function lambda3() {}
  html_on(component, name_event, lambda3);
  window.addEventListener("load", lambda);
}
