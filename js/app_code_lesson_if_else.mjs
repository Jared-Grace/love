import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_if_else_lines } from "./js_code_if_else_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_if_either_decoys } from "./app_code_if_either_decoys.mjs";
import { app_code_if_boolean_flipped } from "./app_code_if_boolean_flipped.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_and_if_not } from "./app_code_lesson_if_and_if_not.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_else() {
  arguments_assert(arguments, 0);
  ('else: let a = true; if (a) { console.log("love"); } else { console.log("joy"); } writes out love, and with let a = false; writes out joy');
  ("The one new fact is that else names the lines to run when the if does not, which If and if not wrote as a second if asking the opposite. Exactly one of the two runs, as there.");
  ("Asked for by the human 2026-10-08, after If and if not, and on the way to: if a number is even, halve it, otherwise multiply it by 3 and add 1.");
  ("Reading forwards, the wrong answers offered are the other word, and both words, which is what a learner writes out who reads else as a line that always runs. Neither word is not offered, since a program that writes out nothing has no answer to press.");
  ("Reading backwards, the wrong program is the same program with the name holding the opposite, which writes out the other word.");
  ("Every program names its value a or b, as in If and if not. Not picked: a condition such as n < 5, since a name holding true or false keeps the one new fact, else, the only thing to read.");
  ("The writing is a first draft by Claude 2026-10-08.");
  ("The second box says else says the same as if (a) beside if (!a) as long as nothing changes a in between, at the human's word 2026-10-08, matching the last box of If and if not. Without it the claim is false: if something changes a between the two ifs, both can run, while else asks once and never runs both. Not picked: showing that difference here, a second new fact, left for a lesson after this one.");
  let bang = js_operator_bang_symbol();
  let fruits = fruits_of_the_spirit();
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function setup_of(name, value) {
    let right = json_to(value);
    let setup = js_code_let_statement(name, right);
    return setup;
  }
  function program_lines(name, value, words) {
    "let name = value; if (name) { console.log(first word); } else { console.log(second word); }";
    let setup2 = setup_of(name, value);
    let item = list_get(words, 0);
    let statement2 = logged(item);
    let item2 = list_get(words, 1);
    let statement3 = logged(item2);
    let if_lines = js_code_if_else_lines(name, statement2, statement3);
    let lines = list_concat([setup2], if_lines);
    return lines;
  }
  function program_get(name, value, words) {
    let lines2 = program_lines(name, value, words);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs: a and b, each true once and false once, each with two different words";
    let cases = [
      ["a", true],
      ["b", true],
      ["a", false],
      ["b", false],
    ];
    function program_of(c) {
      let words2 = list_shuffle_take(fruits, 2);
      let item3 = list_get(c, 0);
      let item4 = list_get(c, 1);
      let code2 = program_get(item3, item4, words2);
      return code2;
    }
    let codes = list_map(cases, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other word, and both words";
    let found = app_code_if_either_decoys(question, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the name holding the opposite";
    let code4 = app_code_if_boolean_flipped(answer);
    let found2 = [code4];
    return found2;
  }
  function above(root, context) {
    "if (a) beside if (!a) remembered, then the same program written with else, with a true and then false";
    let name2 = "a";
    let opposite = text_combine(bang, name2);
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let words3 = [love, joy];
    let statement4 = logged(love);
    let statement5 = logged(joy);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_and_if_not,
      ["", "if (a)", " beside ", "if (!a)", " runs one of the two:"],
    );
    let setup3 = setup_of(name2, true);
    let if_yes = js_code_if_lines(name2, statement4);
    let if_no = js_code_if_lines(opposite, statement5);
    let both_lines = list_concat_multiple([[setup3], if_yes, if_no]);
    app_code_code_lines_writes_out(box_one, both_lines, love);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "",
      "else",
      " says the same in fewer words, as long as nothing changes ",
      name2,
      " in between:",
    ]);
    let true_lines = program_lines(name2, true, words3);
    app_code_code_lines_writes_out(box_two, true_lines, love);
    html_div_cycle_code(box_two, [
      "",
      name2,
      " is ",
      "true",
      ", so the line before ",
      "else",
      " runs",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name2,
      " is ",
      "false",
      ":",
    ]);
    let false_lines = program_lines(name2, false, words3);
    app_code_code_lines_writes_out(box_three, false_lines, joy);
    html_div_cycle_code(box_three, [
      "",
      name2,
      " is ",
      "false",
      ", so the line after ",
      "else",
      " runs",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "So ",
      "else",
      " runs when the ",
      "if",
      " does not",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else",
    "if (a) { ... } else { ... }",
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
