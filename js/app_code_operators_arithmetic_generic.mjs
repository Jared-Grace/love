import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text_padded_space } from "./html_span_text_padded_space.mjs";
import { ternary } from "./ternary.mjs";
import { text_is } from "./text_is.mjs";
import { list_to_and_list } from "./list_to_and_list.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
export function app_code_operators_arithmetic_generic(parent, operator_map) {
  let operators = js_operators_arithmetic();
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
