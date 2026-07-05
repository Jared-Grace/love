import { log } from "../../../love/public/src/log.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
export function app_code_symbols_eval_valid_identifier(symbols) {
  let expression = js_parse_expression_try(symbols);
  let ii = js_identifier_is(expression);
  let validity = boolean_to_text_validity(ii);
  log(app_code_symbols_eval_valid_identifier.name, {
    symbols,
    validity,
  });
  return validity;
}
