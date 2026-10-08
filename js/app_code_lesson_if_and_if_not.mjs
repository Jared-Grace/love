import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_not } from "./app_code_lesson_if_not.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_and_if_not() {
  arguments_assert(arguments, 0);
  ('an if beside an if (!a): let a = true; if (a) { console.log("love"); } if (!a) { console.log("joy"); } writes out love, and with let a = false; writes out joy');
  ("The one new fact is that of the four ways two ifs can go, an if (a) beside an if (!a) only ever goes two: exactly one of them runs, every time, and never both or neither. That is what else will say in fewer words, so this comes just before it.");
  ("Asked for by the human 2026-10-08, after Two ifs, which showed all four ways.");
  ("Reading forwards, the wrong answers offered are the other word, and both words, which is what a learner writes out who reads the second if as asking the same question as the first. Neither word is not offered, since a program that writes out nothing has no answer to press.");
  ("Reading backwards, the wrong program is the same program with the name holding the opposite, which writes out the other word.");
  ("Every program names its value a or b, as in If not.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let bang = js_operator_bang_symbol();
  let fruits = fruits_of_the_spirit();
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function program_lines(name, value, words) {
    "let name = value; if (name) { console.log(first word); } if (!name) { console.log(second word); }";
    let right = json_to(value);
    let setup = js_code_let_statement(name, right);
    let opposite = text_combine(bang, name);
    let item = list_get(words, 0);
    let statement2 = logged(item);
    let if_yes = js_code_if_lines(name, statement2);
    let item2 = list_get(words, 1);
    let statement3 = logged(item2);
    let if_no = js_code_if_lines(opposite, statement3);
    let lines = list_concat_multiple([[setup], if_yes, if_no]);
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
  function flipped(code3) {
    "the same program with the name holding the opposite";
    let lines3 = text_split_newline(code3);
    let first = list_first(lines3);
    let held = text_includes(first, "true");
    let from = "true";
    let to = "false";
    if (not(held)) {
      from = "false";
      to = "true";
    }
    let first_after = text_replace(first, from, to);
    let rest = list_skip(lines3, 1);
    let lines4 = list_concat([first_after], rest);
    let joined2 = list_join_newline(lines4);
    return joined2;
  }
  function decoys(question, answer) {
    "the other word, and both words";
    let code5 = flipped(question);
    let other = eval_console_log_lines(code5);
    let both = list_join_newline([answer, other]);
    let text = text_split_newline(question);
    let input = list_first(text);
    let first_runs = text_includes(input, "true");
    if (not(first_runs)) {
      both = list_join_newline([other, answer]);
    }
    let found = [other, both];
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the name holding the opposite";
    let code4 = flipped(answer);
    let found2 = [code4];
    return found2;
  }
  function above(root, context) {
    "if (!a) remembered, then if (a) beside if (!a), with a true and then false";
    let name2 = "a";
    let opposite2 = text_combine(bang, name2);
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_not, [
      "",
      opposite2,
      " can go in an ",
      "if",
      ":",
    ]);
    let setup2 = js_code_let_statement(name2, "false");
    let statement4 = logged(love);
    let if_not_lines = js_code_if_lines(opposite2, statement4);
    let one = list_concat([setup2], if_not_lines);
    app_code_code_lines_writes_out(box_one, one, love);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put ",
      "if (a)",
      " beside ",
      "if (!a)",
      ":",
    ]);
    let true_lines = program_lines(name2, true, [love, joy]);
    app_code_code_lines_writes_out(box_two, true_lines, love);
    html_div_cycle_code(box_two, [
      "",
      name2,
      " is ",
      "true",
      ", so the first runs",
    ]);
    html_div_cycle_code(box_two, [
      "",
      opposite2,
      " is ",
      "false",
      ", so the second does not",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name2,
      " is ",
      "false",
      ":",
    ]);
    let false_lines = program_lines(name2, false, [love, joy]);
    app_code_code_lines_writes_out(box_three, false_lines, joy);
    html_div_cycle_code(box_three, [
      "",
      name2,
      " is ",
      "false",
      ", so the first does not run",
    ]);
    html_div_cycle_code(box_three, [
      "",
      opposite2,
      " is ",
      "true",
      ", so the second runs",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "So one of the two always runs, and never both",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "If and if not",
    "if (a) ... if (!a) ...",
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
