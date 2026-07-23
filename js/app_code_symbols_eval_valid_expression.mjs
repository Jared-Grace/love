import { js_expression_is } from "./js_expression_is.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
export function app_code_symbols_eval_valid_expression(symbols) {
  let valid = js_expression_is(symbols);
  let validity = boolean_to_text_validity(valid);
  return validity;
}
