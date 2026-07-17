import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_code_element } from "./html_code_element.mjs";
import { html_code_children } from "./html_code_children.mjs";
import { html_code_indent } from "./html_code_indent.mjs";
import { html_code_doctype } from "./html_code_doctype.mjs";
import { html_code_meta_charset } from "./html_code_meta_charset.mjs";
import { html_code_meta_viewport } from "./html_code_meta_viewport.mjs";
import { html_code_attributes_html } from "./html_code_attributes_html.mjs";
export function html_code(name, body) {
  let attributes_none = {};
  let indent = html_code_indent();
  let title = html_code_element("title", attributes_none, name);
  let head_items = [html_code_meta_charset(), html_code_meta_viewport(), title];
  let head_children = html_code_children(head_items, indent);
  let head = html_code_element("head", attributes_none, head_children);
  let body_children = html_code_children([body], indent);
  let body_element = html_code_element("body", attributes_none, body_children);
  let html_children = html_code_children([head, body_element], text_empty());
  let attributes_html = html_code_attributes_html();
  let html = html_code_element("html", attributes_html, html_children);
  let doctype = html_code_doctype();
  let r = text_combine_multiple([doctype, "\n", html]);
  return r;
}
