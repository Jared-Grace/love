import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_on_load(lambda) {
  let w = html_component_wrap(window);
  hon;
  window.addEventListener("load", lambda);
}
