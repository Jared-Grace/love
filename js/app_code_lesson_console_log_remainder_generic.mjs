import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { app_code_remainder_color } from "./app_code_remainder_color.mjs";
import { integer_random } from "./integer_random.mjs";
import { range } from "./range.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { list_join } from "./list_join.mjs";
import { word_pluralize } from "./word_pluralize.mjs";
import { word_is_are } from "./word_is_are.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
import { each_index } from "./each_index.mjs";
import { equal_0 } from "./equal_0.mjs";
import { divide } from "./divide.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_console_log_remainder_generic(divisor, insight) {
  "a reusable remainder (%) lesson for a fixed divisor; the intro shows the CYCLE table (0..2*divisor, so the repeat is visible) and any divisor-specific insight lines (e.g. even/odd for divisor 2)";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  let modulo = property_get(operator, "fn");
  let divisor_text = text_to(divisor);
  let name_right = text_combine(" remainder by ", divisor_text);
  function code_of(n) {
    let code = js_code_binary_spaced_nb(n, percent, divisor);
    return code;
  }
  function refill() {
    let max = app_code_lesson_operators_value_max();
    let base = integer_random(0, max);
    function each_offset(offset) {
      let n = add(base, offset);
      return code_of(n);
    }
    let list = range_map(divisor, each_offset);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [],
    name_id,
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let lesson = property_get(r, "lesson");
  return lesson;
  function title_name_id() {
    "the home title puts the operator glyph % right after the operator name 'remainder', before the 'by <divisor>' qualifier: console.log remainder % by 2";
    let console_name = js_console_log_name();
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, console_name);
        html_span_text(parent, " remainder ");
        html_span_text_code_dark(parent, percent);
        let by = text_combine(" by ", divisor_text);
        html_span_text(parent, by);
      }
      return render;
    }
    let rights = [console_name, name_right];
    let built = app_code_lesson_name_id_generic(rights, "function", title_get);
    return built;
  }
  function remainder_color(remainder) {
    let color = app_code_remainder_color(remainder, divisor);
    return color;
  }
  function remainder_chip(parent, remainder) {
    let color = remainder_color(remainder);
    html_span_text_code_background(parent, text_to(remainder), color);
  }
  function equation_with_remainder(parent, prefix_expr, remainder, result) {
    "one dark code tile 'prefix + remainder === result' with just the remainder digit highlighted in its blue remainder color, so the left over in the sum is tied to the remainder concept and its color";
    let triple_equal = js_operator_triple_equal_symbol();
    let chip = html_span(parent);
    html_style_code_dark(chip);
    let before = text_combine(prefix_expr, " + ");
    html_span_text(chip, before);
    let highlight = html_span(chip);
    html_text_set(highlight, text_to(remainder));
    html_style_background_color_set(highlight, remainder_color(remainder));
    let after = text_combine_multiple([" ", triple_equal, " ", text_to(result)]);
    html_span_text(chip, after);
  }
  function example(parent) {
    "a concrete grouping story: share (5*divisor - 1) pieces of bread into divisor groups; each group gets 4 pieces, so 4 added divisor times is 4*divisor, and divisor-1 pieces are left over (the largest remainder). for divisor 3 this is the familiar 14 pieces into 3 groups of 4 with 2 left over";
    let each_group = 4;
    let group_total = multiply(each_group, divisor);
    let left = subtract(divisor, 1);
    let total = add(group_total, left);
    function group_size_of(index) {
      "the size of each group (ignores which group), so the sum reads 4 + 4 + 4";
      return text_to(each_group);
    }
    let fours = range_map(divisor, group_size_of);
    let sum_expr = list_join(fours, " + ");
    let triple_equal = js_operator_triple_equal_symbol();
    let grouped_equation = js_code_binary_spaced_nb(
      sum_expr,
      triple_equal,
      text_to(group_total),
    );
    html_div_cycle_code(parent, [
      "Suppose we share ",
      text_to(total),
      " pieces of bread into ",
      divisor_text,
      " groups",
    ]);
    html_div_cycle_code(parent, [
      "Each group gets ",
      text_to(each_group),
      " pieces - that is ",
      grouped_equation,
    ]);
    let leftover_middle = text_combine_multiple([
      " ",
      word_pluralize(left, "piece"),
      " ",
      word_is_are(left),
      " left over, so ",
    ]);
    let leftover_line = html_div(parent);
    html_span_text_code_dark(leftover_line, text_to(left));
    html_span_text(leftover_line, leftover_middle);
    equation_with_remainder(leftover_line, sum_expr, left, total);
    let definition = html_div(parent);
    html_span_text(definition, "The left over is called the ");
    html_span_text_bold(definition, "remainder");
    let conclusion = html_div(parent);
    html_span_text(conclusion, "So the remainder is ");
    remainder_chip(conclusion, left);
  }
  function above(root) {
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "When we divide, sometimes the numbers divide evenly",
    ]);
    html_div_cycle_code(intro, ["Other times the numbers do not divide evenly"]);
    example(intro);
    let evenly = html_div(intro);
    html_span_text(
      evenly,
      "When the numbers divide evenly, nothing is left over, so the remainder is ",
    );
    remainder_chip(evenly, 0);
    html_div_cycle_code(intro, ["", percent, " gives the remainder"]);
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
      "list_to_or_list_generic interleaves item, separator, item, ...; the items land on even indices, so render those as colored chips and the odd separators (', ' and ' or ') as plain text";
      let is_item = equal_0(modulo(index, 2));
      if (is_item) {
        let remainder = divide(index, 2);
        remainder_chip(legend, remainder);
      } else {
        html_span_text(legend, part);
      }
    }
    each_index(or_parts, legend_part);
    let table = app_code_container_light_blue(root);
    function row(n) {
      let expr = code_of(n);
      let remainder = modulo(n, divisor);
      let line = html_div(table);
      html_span_text_code_dark(line, expr);
      html_span_text(line, " is ");
      remainder_chip(line, remainder);
    }
    let row_count = add(multiply(2, divisor), 1);
    each(range(row_count), row);
    let has_insight = list_empty_not_is(insight);
    if (has_insight) {
      let insight_box = app_code_container_light_blue(root);
      function insight_line(line) {
        html_div_cycle_code(insight_box, line);
      }
      each(insight, insight_line);
    }
    app_code_container_light_blue_cycle_code(root, [
      "The remainder counts up, then starts over at ",
      "0",
    ]);
  }
}
