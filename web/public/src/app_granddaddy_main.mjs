import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_granddaddy_main() {
  let body = html_document_body();
  let component2 = html_input(body);
  let component3 = html_input(body);
  function lambda2() {
    let value = html_value_get(input);
  }
  let component = html_button(body, "hello", lambda2);
}
