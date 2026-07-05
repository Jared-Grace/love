import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
export function app_code_symbols_eval_valid_expression(symbols) {
  let expression = js_parse_expression_try(symbols);
  let valid = null_not_is(expression);
  let validity = boolean_to_text_validity(valid);
  return validity;
}
