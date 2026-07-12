import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
export function html_input_placeholder_wide_curried(root) {
  let c = function html_input_placeholder_wide_curried_result(placeholder) {
    let r = html_input_placeholder_wide(root, placeholder);
    return r;
  };
  return c;
}
