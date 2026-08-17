import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
import { app_code_lesson_console_log_remainder_generic_above_legend_part } from "./app_code_lesson_console_log_remainder_generic_above_legend_part.mjs";
import { each_index } from "./each_index.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_code_lesson_console_log_remainder_generic_above_row } from "./app_code_lesson_console_log_remainder_generic_above_row.mjs";
import { multiply_add } from "./multiply_add.mjs";
export function app_code_lesson_console_log_remainder_generic_above_row_count(
  r4,
  modulo_fn,
  divisor,
  root,
  percent,
) {
  arguments_assert(arguments, 5);
  let remainder_texts = property_get(r4, "remainder_texts");
  let legend = property_get(r4, "legend");
  let or_parts = list_to_or_list_generic(remainder_texts, "or");
  function legend_part(part, index) {
    let r2 = app_code_lesson_console_log_remainder_generic_above_legend_part(
      part,
      index,
      modulo_fn,
      legend,
      divisor,
    );
    return r2;
  }
  each_index(or_parts, legend_part);
  let table = app_code_container_light_blue(root);
  html_style_gap(table, "0");
  html_style_padding_x(table, "0");
  html_style_padding_y(table, "0");
  function row(n) {
    let r = app_code_lesson_console_log_remainder_generic_above_row(
      n,
      percent,
      divisor,
      modulo_fn,
      table,
    );
    return r;
  }
  let row_count = multiply_add(2, divisor, 1);
  let r3 = {
    row,
    row_count,
  };
  return r3;
}
