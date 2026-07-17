import { html_code } from "./html_code.mjs";
import { examples_body_html } from "./examples_body_html.mjs";
export function examples_page_html(examples) {
  let body = examples_body_html(examples);
  let r = html_code("Transform examples", body);
  return r;
}
