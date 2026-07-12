import { html_on_keydown_stop_logic } from "./html_on_keydown_stop_logic.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
export function html_on_keydown_stop(root, lambda) {
  function on_k(e) {
    html_on_keydown_stop_logic(e);
    lambda(e);
  }
  html_on_keydown(root, on_k);
}
