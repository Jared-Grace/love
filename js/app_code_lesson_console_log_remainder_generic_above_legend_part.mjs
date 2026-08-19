import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_0 } from "./equal_0.mjs";
import { divide } from "./divide.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_console_log_remainder_generic_above_legend_part(
  part,
  index,
  modulo_fn,
  legend,
  divisor,
) {
  arguments_assert(arguments, 5);
  (fn_name("list_to_or_list_generic"),
    " interleaves item, separator, item, ...; the items land on even indices, so render those as colored chips and the odd separators (', ' and ' or ') as plain text");
  let item = modulo_fn(index, 2);
  let is_item = equal_0(item);
  if (is_item) {
    let remainder = divide(index, 2);
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      legend,
      remainder,
      divisor,
    );
  } else {
    html_span_text(legend, part);
  }
}
