import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_if_condition_set } from "./app_code_if_condition_set.mjs";
import { list_find } from "./list_find.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter_index } from "./list_filter_index.mjs";
import { equal } from "./equal.mjs";
import { text_between } from "./text_between.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_less_than } from "./app_code_lesson_if_less_than.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_two_lines() {
  arguments_assert(arguments, 0);
  ('an if around two lines: if (2 < 3) { console.log("love"); console.log("joy"); } with console.log("peace"); beside it writes out love, joy and peace, and with 3 < 2 writes out peace alone');
  ("The one new fact is that an if may hold more than one line, and that every line between { and } runs or none of them does. The condition is a comparison of two numbers, as in If less than, since that is the easiest condition the learner has worked out inside an if that is not written as true or false.");
  ("Asked for by the human 2026-10-08, as the next step after If even: two lines inside { and }, then if (a) beside if (!a), then else.");
  ("Reading forwards, the wrong answers offered are the ones a learner would give who took only the first line after { to belong to the if, which is how an if without braces reads in some languages: when the if runs, the first word inside and the word outside with the second word left out; when it does not, the second word inside and the word outside, as though the second line stood outside the braces. The other is the opposite of the answer: every word when the if does not run, the word outside alone when it does.");
  ("Reading backwards, the wrong program offered is the same program with the two numbers swapped, which writes out the other answer, as in If less than.");
  ("Not picked: building this on the shared builder the if lessons from If a name onward use. That builder reads the word inside the braces back by running the program, which finds one line; with two it would find the first alone and offer the wrong answers for a single line.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let fruits = fruits_of_the_spirit();
  let first_shown = list_get(fruits, 0);
  let second_shown = list_get(fruits, 1);
  let after_shown = list_get(fruits, 2);
  function compared(left, right) {
    "left < right, spaced the way the course spells it";
    let c = js_code_binary_spaced_nb(left, less, right);
    return c;
  }
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function program_lines(condition, words, if_first) {
    "an if around two lines writing out the first two words, and a line writing out the third, the if first or last";
    let first_word = list_get(words, 0);
    let second_word = list_get(words, 1);
    let plain_word = list_get(words, 2);
    let first = logged(first_word);
    let second = logged(second_word);
    let plain = logged(plain_word);
    let if_lines = js_code_if_lines_multiple(condition, [first, second]);
    if (if_first) {
      let whole = list_concat(if_lines, [plain]);
      return whole;
    }
    let whole2 = list_concat([plain], if_lines);
    return whole2;
  }
  function batch_get() {
    "four programs: true first, true last, false first, false last, each with three different words";
    "Each program draws its own three words, since four programs of three different words would need twelve and there are nine fruits of the Spirit.";
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
      let words_three = list_shuffle_take(fruits, 3);
      let if_first = list_get(firsts, index);
      let lines = program_lines(condition, words_three, if_first);
      let code = list_join_newline(lines);
      return code;
    }
    let codes = list_map_index(pairs, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function if_line_is(line) {
    "the line that opens the if";
    let trimmed = text_trim(line);
    let opens = text_starts_with(trimmed, "if ");
    return opens;
  }
  function inside_lines_without(code, inside_index) {
    "the same program run as though the if always ran and the line inside at inside_index were not there, which is what a learner reads who takes only one of the two lines to belong to the if";
    let lines = text_split_newline(code);
    let ran = app_code_if_condition_set(code, "true");
    let ran_lines = text_split_newline(ran);
    let opening_line = list_find(lines, if_line_is);
    let opening = list_index_of(lines, opening_line);
    let skipped = opening + 1 + inside_index;
    function kept(line, index) {
      let k = not_equal(index, skipped);
      return k;
    }
    let left = list_filter_index(ran_lines, kept);
    let joined = list_join_newline(left);
    let written = eval_console_log_lines(joined);
    return written;
  }
  function decoys(question, answer) {
    "when the if runs: the second word inside left out, and the word outside alone; when it does not: the second word inside written out with the word outside, and every word";
    let code2 = app_code_if_condition_set(question, "true");
    let every = eval_console_log_lines(code2);
    let code3 = app_code_if_condition_set(question, "false");
    let plain = eval_console_log_lines(code3);
    let runs = equal(answer, every);
    if (runs) {
      let first_only = inside_lines_without(question, 1);
      let found = [first_only, plain];
      return found;
    }
    let second_too = inside_lines_without(question, 0);
    let found2 = [second_too, every];
    return found2;
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
    let swapped = app_code_if_condition_set(answer, v);
    let found = [swapped];
    return found;
  }
  function above(root, context) {
    "an if around one line remembered, then an if around two, true and then false";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    let small_first = compared(2, 3);
    let big_first = compared(3, 2);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_less_than,
      [
        "",
        small_first,
        " is ",
        "true",
        ", so the line inside the ",
        "if",
        " runs:",
      ],
    );
    let statement2 = logged(first_shown);
    let one_line = js_code_if_lines(small_first, statement2);
    app_code_code_lines_writes_out(box_one, one_line, first_shown);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      "if",
      " can hold more than one line:",
    ]);
    let words_shown = [first_shown, second_shown, after_shown];
    let true_lines = program_lines(small_first, words_shown, true);
    let every = list_join_newline(words_shown);
    app_code_code_lines_writes_out(box_two, true_lines, every);
    html_div_cycle_code(box_two, ["", small_first, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So both lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose we swap the numbers:"]);
    let false_lines = program_lines(big_first, words_shown, true);
    app_code_code_lines_writes_out(box_three, false_lines, after_shown);
    html_div_cycle_code(box_three, ["", big_first, " is ", "false"]);
    html_div_cycle_code(box_three, [
      "So neither line inside ",
      brace_left,
      " and ",
      brace_right,
      " runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two lines in an if",
    "if (2 < 3) { ... ... }",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
