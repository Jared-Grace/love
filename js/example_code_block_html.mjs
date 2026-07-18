import { js_highlight_html } from "./js_highlight_html.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function example_code_block_html(code, class_name) {
  let highlighted = js_highlight_html(code);
  let attributes = { class: class_name };
  let r = html_code_element("pre", attributes, highlighted);
  return r;
}
