import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
export function app_code_lesson_symbols_identifiers_valid(
  name,
  id,
  above,
  on_symbol,
  batch_get,
  symbol_create,
) {
  arguments_assert(arguments, 6);
  const example_label = "Is this a valid identifier? ";
  const quiz_label = example_label;
  let symbols_to_answer = function lambda(symbols) {
    let expression = js_parse_expression_try(symbols);
    let ii = js_identifier_is(expression);
    let result = boolean_to_text_validity(ii);
    return result;
  };
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    on_symbol,
    batch_get,
    example_label,
    quiz_label,
    symbols_to_answer,
    2,
    symbol_create,
    app_code_label_symbols(),
  );
  return r;
}
