import { each } from "../../../love/public/src/each.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { html_span_text_padded_space } from "../../../love/public/src/html_span_text_padded_space.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_to_and_list } from "../../../love/public/src/list_to_and_list.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
export function app_code_operators_arithmetic_generic(parent, operator_map) {
  let operators = js_operators();
  let concated = list_to_and_list(operators);
  function lambda(item) {
    let condition = text_is(item);
    let result = ternary(
      condition,
      html_span_text_padded_space,
      html_span_text_code_dark,
    );
    if (not(condition)) {
      item = operator_map(item);
    }
    result(parent, item);
  }
  each(concated, lambda);
}
