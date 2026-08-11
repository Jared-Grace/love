import { app_code_lesson_console_log_remainder_generic_code_of } from "./app_code_lesson_console_log_remainder_generic_code_of.mjs";
import { app_code_lesson_console_log_remainder_generic_example } from "./app_code_lesson_console_log_remainder_generic_example.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { app_code_lesson_console_log_remainder_generic_title_name_id } from "./app_code_lesson_console_log_remainder_generic_title_name_id.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { app_code_remainder_percent_labels } from "./app_code_remainder_percent_labels.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
import { app_code_remainder_color_light } from "./app_code_remainder_color_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { integer_random } from "./integer_random.mjs";
import { range } from "./range.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
import { each_index } from "./each_index.mjs";
import { equal_0 } from "./equal_0.mjs";
import { divide } from "./divide.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
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
    html_div_cycle_code(intro, [
      "Other times the numbers do not divide evenly",
    ]);
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
      (list_to_or_list_generic.name,
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
    each_index(or_parts, legend_part);
    let table = app_code_container_light_blue(root);
    html_style_gap(table, "0");
    html_style_padding_x(table, "0");
    html_style_padding_y(table, "0");
    function row(n) {
      let expr = app_code_lesson_console_log_remainder_generic_code_of(
        n,
        percent,
        divisor,
      );
      let remainder = modulo_fn(n, divisor);
      let line = html_div(table);
      let band = app_code_remainder_color_light(remainder, divisor);
      html_style_background_color_set(line, band);
      html_page_padding_x(line);
      html_style_padding_y(line, "0.35em");
      html_span_text_code_dark(line, expr);
      html_span_text(line, " is ");
      app_code_lesson_console_log_remainder_generic_remainder_chip(
        line,
        remainder,
        divisor,
      );
    }
    let row_count = multiply_add(2, divisor, 1);
    let list2 = range(row_count);
    each(list2, row);
    let has_insight = list_empty_not_is(insight);
    if (has_insight) {
      let insight_box = app_code_container_light_blue(root);
      function insight_line(line) {
        let insight_row = html_div(insight_box);
        let text = property_get(line, "text");
        html_span_text(insight_row, text);
        let value = property_get(line, "remainder");
        app_code_lesson_console_log_remainder_generic_remainder_chip(
          insight_row,
          value,
          divisor,
        );
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
}
