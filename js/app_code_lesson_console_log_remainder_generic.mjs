import { app_code_lesson_console_log_remainder_generic_above } from "./app_code_lesson_console_log_remainder_generic_above.mjs";
import { app_code_lesson_console_log_remainder_generic_code_of } from "./app_code_lesson_console_log_remainder_generic_code_of.mjs";
import { app_code_lesson_console_log_remainder_generic_title_name_id } from "./app_code_lesson_console_log_remainder_generic_title_name_id.mjs";
import { app_code_remainder_percent_labels } from "./app_code_remainder_percent_labels.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_console_log_remainder_generic(
  divisor,
  insight,
) {
  "a reusable remainder (%) lesson for a fixed divisor; the intro shows the CYCLE table (0..2*divisor, so the repeat is visible) and any divisor-specific insight lines (e.g. even/odd for divisor 2)";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  let modulo_fn = property_get(operator, "fn");
  let divisor_text = text_to(divisor);
  let name_right = text_combine(" remainder by ", divisor_text);
  function refill() {
    let max = app_code_lesson_operators_value_max();
    let base = integer_random(0, max);
    function each_offset(offset) {
      let n = add(base, offset);
      let r = app_code_lesson_console_log_remainder_generic_code_of(
        n,
        percent,
        divisor,
      );
      return r;
    }
    let list = range_map(divisor, each_offset);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_console_log_remainder_generic_title_name_id(
    percent,
    divisor_text,
    name_right,
  );
  let params = {
    above,
    name_id,
    next_arg,
    example_count: 2,
  };
  let from2 = app_code_remainder_percent_labels();
  object_merge(params, from2);
  let lesson = app_code_lesson_expression_generic(params);
  return lesson;
  function above(root) {
    let r2 = app_code_lesson_console_log_remainder_generic_above(
      root,
      divisor,
      divisor_text,
      percent,
      modulo_fn,
      insight,
    );
    return r2;
  }
}
