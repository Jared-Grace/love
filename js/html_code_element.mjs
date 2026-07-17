import { html_code_tag } from "./html_code_tag.mjs";
import { html_code_tag_close } from "./html_code_tag_close.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_element(tag_name, attributes, inner) {
  let open = html_code_tag(tag_name, attributes);
  let close = html_code_tag_close(tag_name);
  let r = text_combine_multiple([open, inner, close]);
  return r;
}
