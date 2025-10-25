import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_granddaddy_main() {
  let body = html_document_body();
  let component2 = html_input(div);
  function lambda2() {
    alert("JESUS");
  }
  let component = html_button(body, "hello", lambda2);
}
