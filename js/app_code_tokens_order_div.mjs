import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_tokens_order_div(container, text) {
  "the tokens of a worked example, in the order they are read, in a line of their own";
  let div = html_div(container);
  html_text_set_code_dark_lines(div, text);
}
