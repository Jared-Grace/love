import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { range_map } from "./range_map.mjs";
import { list_join } from "./list_join.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { word_pluralize } from "./word_pluralize.mjs";
import { word_is_are } from "./word_is_are.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_console_log_remainder_generic_remainder_chip } from "./app_code_lesson_console_log_remainder_generic_remainder_chip.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_console_log_remainder_generic_equation_with_remainder } from "./app_code_lesson_console_log_remainder_generic_equation_with_remainder.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
export function app_code_lesson_console_log_remainder_generic_example(
  parent,
  divisor,
  divisor_text,
) {
  arguments_assert(arguments, 3);
  ("a concrete grouping story: share (divisor+1)*divisor + (divisor-1) loaves of bread into divisor groups; each group gets divisor+1 loaves (deliberately not the group count, so every number in the story is used in only one place), and divisor-1 loaves are left over (the largest remainder). for divisor 3 this is the familiar 14 loaves into 3 groups of 4 with 2 left over");
  let each_group = add(divisor, 1);
  let group_total = multiply(each_group, divisor);
  let left = subtract(divisor, 1);
  let total = add(group_total, left);
  function group_size_of(index) {
    "the size of each group (ignores which group), so the sum reads 4 + 4 + 4";
    let t = text_to(each_group);
    return t;
  }
  let fours = range_map(divisor, group_size_of);
  let sum_expr = list_join(fours, " + ");
  let triple_equal = js_operator_triple_equal_symbol();
  let right = text_to(group_total);
  let grouped_equation = js_code_binary_spaced_nb(
    sum_expr,
    triple_equal,
    right,
  );
  let t3 = text_to(total);
  html_div_cycle_code(parent, [
    "Suppose we share ",
    t3,
    " loaves of bread into ",
    divisor_text,
    " groups",
  ]);
  let t4 = text_to(each_group);
  html_div_cycle_code(parent, [
    "Then each group gets ",
    t4,
    " loaves - that is ",
    grouped_equation,
  ]);
  let chosen = word_pluralize(left, "loaf");
  let verb = word_is_are(left);
  let leftover_middle = text_combine_multiple([
    " ",
    chosen,
    " ",
    verb,
    " left over, so ",
  ]);
  let leftover_line = html_div(parent);
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    leftover_line,
    left,
    divisor,
  );
  html_span_text(leftover_line, leftover_middle);
  app_code_lesson_console_log_remainder_generic_equation_with_remainder(
    leftover_line,
    sum_expr,
    left,
    total,
    divisor,
  );
  let definition = html_div(parent);
  html_span_text(
    definition,
    "When we divide two numbers, the left over is called the ",
  );
  html_span_text_bold(definition, "remainder");
  let conclusion = html_div(parent);
  html_span_text(conclusion, "So the remainder is ");
  app_code_lesson_console_log_remainder_generic_remainder_chip(
    conclusion,
    left,
    divisor,
  );
}
