import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { app_code_lesson_symbols_batches_genric } from "../../../love/public/src/app_code_lesson_symbols_batches_genric.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function app_code_lesson_symbols_identifiers_valid(
  name,
  id,
  above,
  on_symbol,
  batch_symbols,
) {
  const example_label = "Is this a valid identifier? ";
  const quiz_label = example_label;
  let symbols_to_answer = function lambda(symbols) {
    let joined = list_join_empty(symbols);
    let expression = js_parse_expression(joined);
    let ii = js_identifier_is(expression);
    let result = ternary(condition, on_true, on_false);
  };
  let r = app_code_lesson_symbols_batches_genric(
    name,
    id,
    above,
    on_symbol,
    batch_symbols,
    example_label,
    quiz_label,
    symbols_to_answer,
  );
  return r;
}
