import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_console_log_remainder_generic_above_has_insight } from "./app_code_lesson_console_log_remainder_generic_above_has_insight.mjs";
import { app_code_lesson_console_log_remainder_generic_above_insight_line } from "./app_code_lesson_console_log_remainder_generic_above_insight_line.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_console_log_remainder_generic_above_closing(
  root,
  divisor,
  divisor_text,
  percent,
  modulo_fn,
  insight,
) {
  arguments_assert(arguments, 6);
  let intro = app_code_container_light_blue(root);
  let has_insight =
    app_code_lesson_console_log_remainder_generic_above_has_insight(
      divisor,
      intro,
      root,
      divisor_text,
      percent,
      modulo_fn,
      insight,
    );
  if (has_insight) {
    let insight_box = app_code_container_light_blue(root);
    function insight_line(line) {
      let r = app_code_lesson_console_log_remainder_generic_above_insight_line(
        line,
        insight_box,
        divisor,
      );
      return r;
    }
    each(insight, insight_line);
  }
  let closing = app_code_container_light_blue(root);
  return closing;
}
