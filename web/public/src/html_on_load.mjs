import { html_overlay } from "../../../love/public/src/html_overlay.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_on_load(lambda) {
  let w = html_component_wrap(window);
  let overlay = html_overlay(container, z_index);
  window.addEventListener("load", lambda);
}
