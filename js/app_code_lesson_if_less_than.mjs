import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_find } from "./list_find.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_between } from "./text_between.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_less_than } from "./app_code_lesson_expression_less_than.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_less_than() {
  arguments_assert(arguments, 0);
  ('the third if: a comparison inside the parentheses, if (2 < 3) { console.log("love"); } with console.log("joy"); beside it writes out love and joy, and with 3 < 2 writes out joy alone');
  ("The one new fact is that what goes inside the parentheses can be worked out, rather than written as true or false. The learner has worked out a < b many times, and has just met if (true) and if (false); here the two are put together, so a < b is worked out first and the if then does what the last two lessons said.");
  ("It comes before an if given a name, by the human's word, 2026-10-07: whichever is easier goes first. This one is a single line to work out, while a name holding true or false asks the learner to carry a value from one line to the next.");
  ("Less than and not another comparison, because it is the first comparison the course taught and so the one read most often since.");
  ("Each screen asks two programs whose comparison is true and two whose comparison is false, and in each pair the if is first in one and last in the other. Every comparison is of two different numbers far enough apart to read at a glance, and no number is a word written out, so nothing can be found by spotting it.");
  ("Reading forwards, the wrong answers offered are the other two of the three things such a program could write out: both words, the word after the if alone, and the word inside the braces alone. Reading backwards, the wrong program offered is the same program with the two numbers swapped, which writes out the other answer, so it can only be turned down by working the comparison out.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let less = js_operator_less_than_symbol();
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  function compared(left, right) {
    "left < right, spaced the way the course spells it";
    let c = js_code_binary_spaced_nb(left, less, right);
    return c;
  }
  function program_lines(condition, inside_word, plain_word, if_first) {
    "an if around a line writing out one word, and a line writing out another, the if first or last";
    let code2 = app_code_string_code(inside_word);
    let inside = js_code_console_log_statement(code2);
    let code3 = app_code_string_code(plain_word);
    let plain = js_code_console_log_statement(code3);
    let if_lines = js_code_if_lines(condition, inside);
    if (if_first) {
      let first = list_concat(if_lines, [plain]);
      return first;
    }
    let last = list_concat([plain], if_lines);
    return last;
  }
  function batch_get() {
    "four programs: true first, true last, false first, false last, eight different words";
    let words = list_shuffle_take(fruits, 8);
    let trues = list_shuffle_take(
      [
        [1, 4],
        [2, 7],
        [3, 6],
        [4, 9],
      ],
      2,
    );
    let falses = list_shuffle_take(
      [
        [6, 2],
        [8, 3],
        [5, 1],
        [9, 4],
      ],
      2,
    );
    let pairs = list_concat(trues, falses);
    let firsts = [true, false, true, false];
    function program_of(pair, index) {
      let left = list_get(pair, 0);
      let right = list_get(pair, 1);
      let condition = compared(left, right);
      let index2 = multiply(index, 2);
      let inside_word = list_get(words, index2);
      let plain_word = list_get(words, multiply(index, 2) + 1);
      let if_first = list_get(firsts, index);
      let lines = program_lines(condition, inside_word, plain_word, if_first);
      let code = list_join_newline(lines);
      return code;
    }
    let codes = list_map_index(pairs, program_of);
    list_shuffle(codes);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function if_line_is(line) {
    "the line that opens the if";
    let opens = text_starts_with(line, "if ");
    return opens;
  }
  function condition_set(code, condition) {
    "the same program with what is inside the parentheses replaced";
    let lines = text_split_newline(code);
    let opening = js_code_if_lines(condition, "");
    let opening_line = list_first(opening);
    function replaced(line) {
      if (if_line_is(line)) {
        return opening_line;
      }
      return line;
    }
    let mapped = list_map(lines, replaced);
    let joined = list_join_newline(mapped);
    return joined;
  }
  function decoys(question, answer) {
    "of the three things such a program could write out - both words, the word after the if, the word inside - the two that are not the answer";
    let code4 = condition_set(question, "true");
    let both = eval_console_log_lines(code4);
    let code5 = condition_set(question, "false");
    let plain = eval_console_log_lines(code5);
    let both_lines = text_split_newline(both);
    function inside_is(line) {
      let i = not_equal(line, plain);
      return i;
    }
    let inside = list_find(both_lines, inside_is);
    let all = [both, plain, inside];
    function wrong(one) {
      let w = not_equal(one, answer);
      return w;
    }
    let found = list_filter(all, wrong);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the two numbers it compares swapped, so the comparison and what is written out both turn the other way";
    let lines = text_split_newline(answer);
    let opening = list_find(lines, if_line_is);
    let condition = text_between(opening, "(", ")");
    let sides = text_split(condition, less);
    let message = list_first(sides);
    let left = text_trim(message);
    let message2 = list_last(sides);
    let right = text_trim(message2);
    let v = compared(right, left);
    let swapped = condition_set(answer, v);
    let found = [swapped];
    return found;
  }
  function above(root, context) {
    "a < b worked out, then that comparison inside an if, true and then false";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    let left = js_code_parenthesis_left();
    let right = js_code_parenthesis_right();
    let small_first = compared(2, 3);
    let big_first = compared(3, 2);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_expression_less_than,
      ["", small_first, " is ", "true"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put ",
      small_first,
      " inside ",
      left,
      " and ",
      right,
      ":",
    ]);
    let true_lines = program_lines(
      small_first,
      inside_shown,
      after_shown,
      true,
    );
    let both = list_join_newline([inside_shown, after_shown]);
    app_code_code_lines_writes_out(box_two, true_lines, both);
    html_div_cycle_code(box_two, ["", small_first, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose we swap the numbers:"]);
    let false_lines = program_lines(big_first, inside_shown, after_shown, true);
    app_code_code_lines_writes_out(box_three, false_lines, after_shown);
    html_div_cycle_code(box_three, ["", big_first, " is ", "false"]);
    html_div_cycle_code(box_three, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id_dots(
    "If less than",
    "if (a < b) { ... }",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
