import { html_code_tag } from "./html_code_tag.mjs";
export function html_code_meta_charset() {
  let attributes = {
    charset: "UTF-8",
  };
  let r = html_code_tag("meta", attributes);
  return r;
}
