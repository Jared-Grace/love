import { html_code_attributes } from "./html_code_attributes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_tag(tag_name, attributes) {
  let a = html_code_attributes(attributes);
  let r = text_combine_multiple(["<", tag_name, a, ">"]);
  return r;
}
