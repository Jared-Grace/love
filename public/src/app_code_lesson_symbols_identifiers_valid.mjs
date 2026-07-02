import { js_parse_expression_from_assignment } from "../../../love/public/src/js_parse_expression_from_assignment.mjs";
import { boolean_to_text_validity } from "../../../love/public/src/boolean_to_text_validity.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { app_code_lesson_symbols_batches_genric } from "../../../love/public/src/app_code_lesson_symbols_batches_genric.mjs";
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
    try {
      let expression = null;
      expression = js_parse_expression_from_assignment(joined);
    } catch (e) {}
    let ii = js_identifier_is(expression);
    let result = boolean_to_text_validity(ii);
    return result;
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
