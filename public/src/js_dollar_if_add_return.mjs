import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_statement_if_consequent_get } from "../../../love/public/src/js_statement_if_consequent_get.mjs";
export function js_dollar_if_add_return(stack1) {
  let consequent = js_statement_if_consequent_get(stack1);
  let body_block = property_get(consequent, "body");
  js_statement_return_empty_add(body_block);
}
