import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_console_log_remainder_generic_above_remainder_texts } from "./app_code_lesson_console_log_remainder_generic_above_remainder_texts.mjs";
import { app_code_lesson_console_log_remainder_generic_above_row_count } from "./app_code_lesson_console_log_remainder_generic_above_row_count.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function app_code_lesson_console_log_remainder_generic_above_has_insight(
  divisor,
  intro,
  root,
  divisor_text,
  percent,
  modulo_fn,
  insight,
) {
  arguments_assert(arguments, 7);
  let r4 = app_code_lesson_console_log_remainder_generic_above_remainder_texts(
    divisor,
    intro,
    root,
    divisor_text,
    percent,
  );
  let r = app_code_lesson_console_log_remainder_generic_above_row_count(
    r4,
    modulo_fn,
    divisor,
    root,
    percent,
  );
  let row_count = property_get(r, "row_count");
  let row = property_get(r, "row");
  let list = range(row_count);
  each(list, row);
  let has_insight = list_empty_not_is(insight);
  return has_insight;
}
