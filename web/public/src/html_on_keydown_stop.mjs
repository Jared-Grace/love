import { marker } from "../../../love/public/src/marker.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
export function html_on_keydown_stop(lambda) {
  marker("1");
  function on_k(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    lambda(e);
  }
  html_on_keydown(root, on_k);
}
