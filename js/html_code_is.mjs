import { html_code_doctype } from "./html_code_doctype.mjs";
import { html_code_tag } from "./html_code_tag.mjs";
import { html_code_attributes_html } from "./html_code_attributes_html.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_is(contents) {
  let attributes_none = {};
  let attributes_html = html_code_attributes_html();
  let prefix = text_combine_multiple([
    html_code_doctype(),
    "\n",
    html_code_tag("html", attributes_html),
    "\n",
    html_code_tag("head", attributes_none),
    "\n",
  ]);
  let starts = text_starts_with(contents, prefix);
  return starts;
}
