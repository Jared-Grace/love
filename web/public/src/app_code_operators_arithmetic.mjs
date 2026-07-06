import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { html_span_text_padded_space } from "../../../love/public/src/html_span_text_padded_space.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_to_and_list } from "../../../love/public/src/list_to_and_list.mjs";
import { list_map_property_to } from "../../../love/public/src/list_map_property_to.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
export function app_code_operators_arithmetic(d) {
  let operators = js_operators();
  let p = js_operator_plus();
  let r2 = js_operator_minus();
  let r22 = js_operator_asterisk();
  let r23 = js_operator_division();
  const operators_text = [p, r2, r22, r23];
  let mapped = list_map_property_to(operators_text, "operator");
  let concated = list_to_and_list(mapped);
  function lambda4(item) {
    let condition = text_is(item);
    let result = ternary(
      condition,
      html_span_text_padded_space,
      html_span_text_code_dark,
    );
    if (not(condition)) {
      item = property_get(item, "operator");
    }
    result(d, item);
  }
  each(concated, lambda4);
}
