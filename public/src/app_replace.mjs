import { html_element } from "./html_element.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");
  let set1 = {
    name: "grow",
    rules: ["a > a a"],
  };
  let rule_sets = [];
  const tag_name = "div";
  html_element(body, tag_name);
}
