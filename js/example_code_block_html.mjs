import { html_escape } from "./html_escape.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function example_code_block_html(code, class_name) {
  let escaped = html_escape(code);
  let attributes = { class: class_name };
  let r = html_code_element("pre", attributes, escaped);
  return r;
}
