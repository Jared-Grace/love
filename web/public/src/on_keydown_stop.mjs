import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { invoke_multiple_arg } from "../../../love/public/src/invoke_multiple_arg.mjs";
export function on_keydown_stop(e) {
  function lambda(e) {
    on_keydown_stop(e);
    invoke_multiple_arg(on_keydowns, e);
  }
  html_on_keydown(root, lambda);
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}
