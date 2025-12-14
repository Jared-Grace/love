import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
export function on_keydown_stop(lambda) {
  function on_k(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    lambda(e);
  }
  html_on_keydown(root, on_k);
}
