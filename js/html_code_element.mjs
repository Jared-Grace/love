import { html_code_tag } from "./html_code_tag.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_element(tag_name, attributes, inner) {
  let open = html_code_tag(tag_name, attributes);
  let r = text_combine_multiple([open, inner, "</", tag_name, ">"]);
  return r;
}
