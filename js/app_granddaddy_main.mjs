import { integer_to_try } from "./integer_to_try.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { add } from "./add.mjs";
import { html_p } from "./html_p.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input } from "./html_input.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_button } from "./html_button.mjs";
export function app_granddaddy_main() {
  let body = html_document_body();
  let component2 = html_input(body);
  let component3 = html_input(body);
  let component4 = null;
  function lambda() {
    let value2 = html_value_get(component2);
    let i = integer_to_try(value2);
    let value3 = html_value_get(component3);
    let i2 = integer_to_try(value3);
    let sum = add(i, i2);
    html_text_set(component4, sum);
  }
  let component = html_button(body, "add", lambda);
  component4 = html_p(body);
}
