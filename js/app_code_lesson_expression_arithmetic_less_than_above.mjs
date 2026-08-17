import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue_div } from "./app_code_container_light_blue_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_to_or_list_word } from "./list_to_or_list_word.mjs";
import { app_code_operators_word_list } from "./app_code_operators_word_list.mjs";
import { js_operator_symbol } from "./js_operator_symbol.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
import { app_code_operators_comparison_or_list } from "./app_code_operators_comparison_or_list.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_expression_arithmetic_less_than_worked_example } from "./app_code_lesson_expression_arithmetic_less_than_worked_example.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_expression_arithmetic_less_than_above(
  root,
  less_than_fn,
  less_than_symbol,
) {
  arguments_assert(arguments, 3);
  ("the intro: the one rule, then it worked twice with DIFFERENT arithmetic and on opposite sides of the <, every result computed from the < comparison so nothing is hand-typed");
  ("The word comparison is BOLD here and followed by a colon, because this is where the learner first meets it and this line already lists the six operators it names. Bolding a term at its first mention is what the repo does for a word it is defining, and the colon is what turns the six symbols from a continuation of the rule into what the word means. Without it the word was used for thirty-nine lessons before the comparing-a-comparison lesson finally named it - which its own naming card admits: used since the arithmetic-comparison lesson, but only ever alongside its operators in passing. That card stays where it is and now reads as the recall it always was.");
  let line = app_code_container_light_blue_div(root);
  html_span_text(line, "We always do the ");
  let four = js_operators_arithmetic();
  let o = js_operator_double_asterisk();
  let more = [o];
  let operators = list_concat(four, more);
  let word_relationship = list_to_or_list_word();
  app_code_operators_word_list(
    line,
    operators,
    word_relationship,
    js_operator_symbol,
  );
  html_span_text(line, " before any ");
  html_span_text_bold(line, "comparison");
  html_span_text(line, ": ");
  app_code_operators_comparison_or_list(line);
  let sum = add(2, 3);
  app_code_lesson_expression_arithmetic_less_than_worked_example(
    9,
    true,
    2,
    "+",
    3,
    sum,
    less_than_fn,
    root,
    less_than_symbol,
  );
  let p = multiply(3, 2);
  app_code_lesson_expression_arithmetic_less_than_worked_example(
    7,
    false,
    3,
    "*",
    2,
    p,
    less_than_fn,
    root,
    less_than_symbol,
  );
}
