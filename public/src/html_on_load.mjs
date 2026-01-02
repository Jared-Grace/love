import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_on_load(lambda) {
  let v = html_component_wrap(element);
  window.addEventListener("load", lambda);
}
