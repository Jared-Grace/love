import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_integers } from "./text_integers.mjs";
import { equal } from "./equal.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_name } from "./app_code_lesson_if_name.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_two_ifs() {
  arguments_assert(arguments, 0);
  ('two ifs asking about two names: let a = 2; let b = 7; if (a < 5) { console.log("love"); } if (b < 5) { console.log("joy"); } console.log("peace"); writes out love and peace');
  ("The one new fact is that two ifs each ask their own question, so together they can go four ways: both run, only the first, only the second, or neither. Each batch holds one program of each, so the learner meets all four.");
  ("Asked for by the human 2026-10-08: two ifs give four possibilities, 11 10 01 00, before if (a) beside if (!a), which is the two of the four where exactly one runs.");
  ("A line outside both ifs is written out last, so no program writes out nothing at all.");
  ("Reading forwards, the wrong answers offered are the two that come from reading one of the two questions the wrong way: the first if turned the other way, and the second.");
  ("Reading backwards, the wrong program is the same program with the first name holding a number on the other side of 5, so the first if turns the other way.");
  ("The names hold a number from 1 to 9 other than 5, and the number on the other side of 5 is 10 take away it, so no name ever holds 5 itself.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let names = ["a", "b"];
  let fruits = fruits_of_the_spirit();
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function if_about(index, word) {
    "if (name < 5) { console.log(\"word\"); } for the name at index";
    let name = list_get(names, index);
    let condition = js_code_binary_spaced_nb(name, less, 5);
    let statement2 = logged(word);
    let lines = js_code_if_lines(condition, statement2);
    return lines;
  }
  function program_lines(values, words) {
    "let a = values[0]; let b = values[1]; an if about each writing out its word; then the third word";
    let left = list_get(names, 0);
    let right = list_get(values, 0);
    let first = js_code_let_statement(left, right);
    let left2 = list_get(names, 1);
    let right2 = list_get(values, 1);
    let second = js_code_let_statement(left2, right2);
    let item = list_get(words, 0);
    let if_a = if_about(0, item);
    let item2 = list_get(words, 1);
    let if_b = if_about(1, item2);
    let item3 = list_get(words, 2);
    let plain = logged(item3);
    let whole = list_concat_multiple([[first, second], if_a, if_b, [plain]]);
    return whole;
  }
  function batch_get() {
    "four programs: both ifs run, only the first, only the second, neither";
    let lows = list_shuffle_take([1, 2, 3, 4], 4);
    let highs = list_shuffle_take([6, 7, 8, 9], 4);
    let item4 = list_get(lows, 0);
    let item5 = list_get(lows, 1);
    let item6 = list_get(lows, 2);
    let item7 = list_get(highs, 0);
    let item8 = list_get(highs, 1);
    let item9 = list_get(highs, 2);
    let item10 = list_get(highs, 3);
    let item11 = list_get(lows, 3);
    let ways = [
      [item4, item5],
      [item6, item7],
      [item8, item9],
      [item10, item11],
    ];
    function program_of(values2) {
      let words2 = list_shuffle_take(fruits, 3);
      let lines2 = program_lines(values2, words2);
      let code2 = list_join_newline(lines2);
      return code2;
    }
    let codes = list_map(ways, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function flipped(code3, index) {
    "the same program with the name at index holding 10 take away its number, so its if turns the other way";
    let lines3 = text_split_newline(code3);
    let numbers = text_integers(code3);
    let value = list_get(numbers, index);
    let name2 = list_get(names, index);
    let right3 = subtract(10, value);
    let line = js_code_let_statement(name2, right3);
    function line_at(l, i) {
      if (equal(i, index)) {
        return line;
      }
      return l;
    }
    let changed = list_map_index(lines3, line_at);
    let joined = list_join_newline(changed);
    return joined;
  }
  function decoys(question, answer) {
    "what is written out with the first if turned the other way, and with the second";
    let flip_a = flipped(question, 0);
    let flip_b = flipped(question, 1);
    let found = list_map([flip_a, flip_b], eval_console_log_lines);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the first if turned the other way";
    let code4 = flipped(answer, 0);
    let found2 = [code4];
    return found2;
  }
  function above(root, context) {
    "one if remembered, then two, then the four ways two ifs can go";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_name, [
      "an ",
      "if",
      " can ask about a name:",
    ]);
    let let_a = js_code_let_statement("a", 2);
    let b = if_about(0, love);
    let one_if = list_concat([let_a], b);
    app_code_code_lines_writes_out(box_one, one_if, love);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Two ",
      "if",
      "s each ask their own question:",
    ]);
    let two = program_lines([2, 7], [love, joy, peace]);
    let written = list_join_newline([love, peace]);
    app_code_code_lines_writes_out(box_two, two, written);
    let a_less = js_code_binary_spaced_nb(2, less, 5);
    let b_less = js_code_binary_spaced_nb(7, less, 5);
    html_div_cycle_code(box_two, [
      "",
      a_less,
      " is ",
      "true",
      ", so ",
      love,
      " is written out",
    ]);
    html_div_cycle_code(box_two, [
      "",
      b_less,
      " is ",
      "false",
      ", so ",
      joy,
      " is not",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["So two ", "if", "s can go four ways:"]);
    let a_condition = js_code_binary_spaced_nb("a", less, 5);
    let if_a = js_code_if_dots(a_condition);
    let b_condition = js_code_binary_spaced_nb("b", less, 5);
    let if_b = js_code_if_dots(b_condition);
    html_div_cycle_code(box_three, ["", if_a, " and ", if_b, " both run"]);
    html_div_cycle_code(box_three, ["only ", if_a, " runs"]);
    html_div_cycle_code(box_three, ["only ", if_b, " runs"]);
    html_div_cycle_code(box_three, ["neither ", if_a, " nor ", if_b, " runs"]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two ifs",
    "if (a < 5) ... if (b < 5) ...",
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
