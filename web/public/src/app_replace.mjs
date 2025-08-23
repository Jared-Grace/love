import { html_button } from "./html_button.mjs";
import { each } from "./each.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");
  let rule_sets = [
    {
      name: "Grow",
      rules: ["a > a a"],
    },
    {
      name: "Shrink",
      rules: ["a a > a"],
    },
  ];
  html_button(body);
  function lambda(rs) {}
  each(rule_sets, lambda);
}
