import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
export function html_input_placeholder_wide_curried(root) {
  let c = function html_input_placeholder_wide_curried_result(placeholder) {
    return html_input_placeholder_wide(root, placeholder);
  };
  return c;
}
