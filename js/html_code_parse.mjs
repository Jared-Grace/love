import { html_code_tag } from "./html_code_tag.mjs";
import { html_code_tag_close } from "./html_code_tag_close.mjs";
import { html_code_indent } from "./html_code_indent.mjs";
import { text_between } from "./text_between.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_code_parse(contents) {
  let attributes_none = {};
  let title_open = html_code_tag("title", attributes_none);
  let title_close = html_code_tag_close("title");
  let name = text_between(contents, title_open, title_close);
  let body_open = text_combine_multiple([
    html_code_tag("body", attributes_none),
    "\n",
    html_code_indent(),
  ]);
  let body_close = text_combine("\n", html_code_tag_close("body"));
  let body = text_between(contents, body_open, body_close);
  let v = {
    name,
    body,
  };
  return v;
}
