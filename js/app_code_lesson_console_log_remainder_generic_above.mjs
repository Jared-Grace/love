import { app_code_lesson_console_log_remainder_generic_above_insight_line } from "./app_code_lesson_console_log_remainder_generic_above_insight_line.mjs";
import { app_code_lesson_console_log_remainder_generic_above_legend_part } from "./app_code_lesson_console_log_remainder_generic_above_legend_part.mjs";
import { app_code_lesson_console_log_remainder_generic_above_row } from "./app_code_lesson_console_log_remainder_generic_above_row.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_console_log_remainder_generic_example } from "./app_code_lesson_console_log_remainder_generic_example.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
import { each_index } from "./each_index.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
export function app_code_lesson_console_log_remainder_generic_above(
  root,
  divisor,
  divisor_text,
  percent,
  modulo_fn,
  insight,
) {
  arguments_assert(arguments, 6);
  let intro = app_code_container_light_blue(root);
  let review = greater_than(divisor, 2);
  let opener = "When";
  if (review) {
    opener = "Remember: when";
  }
  let first_line = text_combine(
    opener,
    " we divide two numbers, sometimes the numbers divide evenly",
  );
  html_div_cycle_code(intro, [first_line]);
  html_div_cycle_code(intro, ["Other times the numbers do not divide evenly"]);
  let example_box = app_code_container_light_blue(root);
  app_code_lesson_console_log_remainder_generic_example(
    example_box,
    divisor,
    divisor_text,
  );
  let evenly_box = app_code_container_light_blue(root);
  let evenly = html_div(evenly_box);
  html_span_text(
    evenly,
    "When two numbers divide evenly, nothing is left over, so the remainder is ",
  );
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    evenly,
    0,
    divisor,
  );
  html_div_cycle_code(evenly_box, ["", percent, " gives the remainder"]);
  let meaning = app_code_container_light_blue(root);
  html_div_cycle_code(meaning, [
    "When we divide by ",
    divisor_text,
    ", the remainder is always smaller than ",
    divisor_text,
  ]);
  let legend = html_div(meaning);
  html_span_text(legend, "So if we divide by ");
  html_span_text_code_dark(legend, divisor_text);
  html_span_text(legend, ", the remainder is one of these: ");
  let remainder_texts = range_map(divisor, text_to);
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
  let list = range(row_count);
  each(list, row);
  let has_insight = list_empty_not_is(insight);
  if (has_insight) {
    let insight_box = app_code_container_light_blue(root);
    function insight_line(line) {
      let r3 = app_code_lesson_console_log_remainder_generic_above_insight_line(
        line,
        insight_box,
        divisor,
      );
      return r3;
    }
    each(insight, insight_line);
  }
  let closing = app_code_container_light_blue(root);
  let closing_line = html_div(closing);
  let alternates = equal(divisor, 2);
  if (alternates) {
    html_span_text(closing_line, "The remainder alternates between ");
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      0,
      divisor,
    );
    html_span_text(closing_line, " and ");
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      1,
      divisor,
    );
  } else {
    html_span_text(
      closing_line,
      "The remainder counts up, then starts over at ",
    );
    app_code_lesson_console_log_remainder_generic_remainder_chip(
      closing_line,
      0,
      divisor,
    );
  }
}
