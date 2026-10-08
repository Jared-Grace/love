import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { text_integers } from "./text_integers.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { less_than } from "./less_than.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_twice } from "./app_code_lesson_if_twice.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_two_bounds() {
  arguments_assert(arguments, 0);
  ('two ifs asking about one name: let n = 4; if (n > 1) { console.log("love"); } if (n > 3) { console.log("joy"); } console.log("peace"); writes out love, joy and peace, and with n starting at 2 writes out love and peace');
  ("The one new fact is that two ifs ask their own questions even about the same name, but here they can only go three ways: both, only the first, or neither. Only the second can never run alone, since a number more than 3 is more than 1 too. So this comes before Two ifs, which asks about two names and so goes all four ways.");
  ("Asked for by the human 2026-10-08: simpler first, like x > 1 then x > 2, which won't have all four yet.");
  ("A line outside both ifs is written out last, so no program writes out nothing at all.");
  ("Reading forwards, the wrong answers offered are what the other two of the three ways write out. Not picked: only the second word and the last, the fourth way, since nothing in the lesson can write it out and offering it would only test reading > the wrong way round, which If less than already did with <.");
  ("Reading backwards, the wrong program is the same program with n starting where the ifs go another way: one more than the first number when both run, one less than it when only the first runs, and one more than the second number when neither runs.");
  ("n never starts at either number it is compared against, so no answer turns on whether more than counts the number itself.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let greater = js_operator_greater_than_symbol();
  let name = "n";
  let fruits = fruits_of_the_spirit();
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function if_about(bound, word) {
    'if (n > bound) { console.log("word"); }';
    let condition = js_code_binary_spaced_nb(name, greater, bound);
    let statement2 = logged(word);
    let lines = js_code_if_lines(condition, statement2);
    return lines;
  }
  function program_lines(start, low, high, words) {
    "let n = start; if (n > low) { first word } if (n > high) { second word } then the third word";
    let setup = js_code_let_statement(name, start);
    let item = list_get(words, 0);
    let if_low = if_about(low, item);
    let item2 = list_get(words, 1);
    let if_high = if_about(high, item2);
    let item3 = list_get(words, 2);
    let plain = logged(item3);
    let whole = list_concat_multiple([[setup], if_low, if_high, [plain]]);
    return whole;
  }
  function batch_get() {
    "four programs: one where both ifs run, two where only the first runs, one where neither runs; as [start, low, high]";
    let both = list_shuffle_take(
      [
        [7, 2, 5],
        [8, 1, 4],
        [6, 3, 5],
      ],
      1,
    );
    let first = list_shuffle_take(
      [
        [4, 2, 6],
        [3, 1, 5],
        [5, 3, 7],
      ],
      2,
    );
    let neither = list_shuffle_take(
      [
        [1, 2, 5],
        [2, 4, 7],
        [1, 3, 6],
      ],
      1,
    );
    let triples = list_concat_multiple([both, first, neither]);
    function program_of(triple) {
      let words2 = list_shuffle_take(fruits, 3);
      let start2 = list_get(triple, 0);
      let low2 = list_get(triple, 1);
      let high2 = list_get(triple, 2);
      let lines2 = program_lines(start2, low2, high2, words2);
      let code2 = list_join_newline(lines2);
      return code2;
    }
    let codes = list_map(triples, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function started(code3, start3) {
    "the same program with n starting at start3";
    let lines3 = text_split_newline(code3);
    let setup2 = js_code_let_statement(name, start3);
    let rest = list_skip(lines3, 1);
    let lines4 = list_concat([setup2], rest);
    let joined = list_join_newline(lines4);
    return joined;
  }
  function starts_three_ways(code4) {
    "a start for each of the three ways, both then only the first then neither, as [start, low, high] read back from the program - its only numbers, in that order";
    let numbers = text_integers(code4);
    let low3 = list_get(numbers, 1);
    let high3 = list_get(numbers, 2);
    let difference = subtract(low3, 1);
    let starts = [high3 + 1, low3 + 1, difference];
    return starts;
  }
  function decoys(question, answer) {
    "what the other two of the three ways write out";
    let starts2 = starts_three_ways(question);
    function written_from(start4) {
      let code5 = started(question, start4);
      let out = eval_console_log_lines(code5);
      return out;
    }
    let outs = list_map(starts2, written_from);
    function other(out2) {
      let different = not_equal(out2, answer);
      return different;
    }
    let found = list_filter(outs, other);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with n starting where the ifs go another way";
    let numbers2 = text_integers(answer);
    let start5 = list_get(numbers2, 0);
    let low4 = list_get(numbers2, 1);
    let high4 = list_get(numbers2, 2);
    let start_after = high4 + 1;
    let both_run = less_than(high4, start5);
    let first_runs = less_than(low4, start5);
    if (first_runs) {
      start_after = subtract(low4, 1);
    }
    if (both_run) {
      start_after = low4 + 1;
    }
    let code6 = started(answer, start_after);
    let found2 = [code6];
    return found2;
  }
  function above(root, context) {
    "the same if twice remembered, then two ifs about one name with different numbers, then the three ways they can go";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let words3 = [love, joy, peace];
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_twice, [
      "The same ",
      "if",
      " can be written twice",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Two ",
      "if",
      "s can ask about one name with different numbers:",
    ]);
    let all_lines = program_lines(4, 1, 3, words3);
    let all_written = list_join_newline(words3);
    app_code_code_lines_writes_out(box_two, all_lines, all_written);
    let low_true = js_code_binary_spaced_nb(4, greater, 1);
    let high_true = js_code_binary_spaced_nb(4, greater, 3);
    html_div_cycle_code(box_two, [
      "",
      low_true,
      " is ",
      "true",
      ", and so is ",
      high_true,
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "2",
      ":",
    ]);
    let first_lines = program_lines(2, 1, 3, words3);
    let first_written = list_join_newline([love, peace]);
    app_code_code_lines_writes_out(box_three, first_lines, first_written);
    let low_true2 = js_code_binary_spaced_nb(2, greater, 1);
    let high_false = js_code_binary_spaced_nb(2, greater, 3);
    html_div_cycle_code(box_three, [
      "",
      low_true2,
      " is ",
      "true",
      ", but ",
      high_false,
      " is ",
      "false",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "So these two ",
      "if",
      "s can go three ways:",
    ]);
    html_div_cycle_code(box_four, ["both run"]);
    html_div_cycle_code(box_four, ["only the first runs"]);
    html_div_cycle_code(box_four, ["neither runs"]);
    html_div_cycle_code(box_four, [
      "The second never runs alone: a number more than ",
      "3",
      " is more than ",
      "1",
      " too",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two ifs, one name",
    "if (n > 1) ... if (n > 3) ...",
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
