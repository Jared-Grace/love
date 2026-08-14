import { html_code_tag } from "./html_code_tag.mjs";
export function html_code_meta_description(description) {
  "$plain description";
  "The sentence shown under a page's name in a list of search results.";
  let attributes = {
    name: "description",
    content: description,
  };
  let r = html_code_tag("meta", attributes);
  return r;
}
