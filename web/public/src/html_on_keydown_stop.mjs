import { html_on_keydown_stop_logic } from "../../../love/public/src/html_on_keydown_stop_logic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
export function html_on_keydown_stop(root, lambda) {
  marker("1");
  function on_k(e) {
    html_on_keydown_stop_logic(e);
    lambda(e);
  }
  html_on_keydown(root, on_k);
}
