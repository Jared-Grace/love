import { html_code_tag } from "./html_code_tag.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_manifest_link(name) {
  let href = text_combine_multiple(["/", name, ".webmanifest"]);
  let attributes = {
    rel: "manifest",
    href,
  };
  let r = html_code_tag("link", attributes);
  return r;
}
