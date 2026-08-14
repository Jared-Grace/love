import { html_code_tag } from "./html_code_tag.mjs";
export function html_code_meta_property(property, content) {
  "$plain property";
  "$plain content";
  "One of the tags a chat app or a link board reads to build the little card it shows in place of a bare address.";
  "These are spelled with property rather than name, which is the one thing that tells them apart from the ordinary head tags beside them.";
  let attributes = {
    property,
    content,
  };
  let r = html_code_tag("meta", attributes);
  return r;
}
