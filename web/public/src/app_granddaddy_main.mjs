import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_granddaddy_main() {
  let body = html_document_body();
  let component2 = html_input(body);
  let component3 = html_input(body);
  let component4 = null;
  function lambda2() {
    let value2 = html_value_get(component2);
    let i = integer_to(input);
    let value3 = html_value_get(component3);
    let sum = add(value2, value3);
    html_text_set(component4, sum);
  }
  let component = html_button(body, "add", lambda2);
  component4 = html_p(body);
}
