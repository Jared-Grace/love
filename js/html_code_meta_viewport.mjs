import { html_code_tag } from "./html_code_tag.mjs";
import { html_meta_viewport_content } from "./html_meta_viewport_content.mjs";
export function html_code_meta_viewport() {
  let attributes = {
    name: "viewport",
    content: html_meta_viewport_content(),
  };
  let r = html_code_tag("meta", attributes);
  return r;
}
