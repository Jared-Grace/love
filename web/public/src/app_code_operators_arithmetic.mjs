import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { html_span_text_padded_space } from "../../../love/public/src/html_span_text_padded_space.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
export function app_code_operators_arithmetic(d) {
  let operators = js_operators();
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
  each(operators, lambda4);
}
