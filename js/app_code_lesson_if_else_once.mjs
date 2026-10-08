import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_if_boolean_flipped } from "./app_code_if_boolean_flipped.mjs";
import { list_without } from "./list_without.mjs";
import { text_between } from "./text_between.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_else } from "./app_code_lesson_if_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_else_once() {
  arguments_assert(arguments, 0);
  ('else asks once: let a = true; if (a) { console.log("love"); a = false; } if (!a) { console.log("joy"); } writes out love and joy, while the same with } else { in place of } if (!a) { writes out love alone');
  ("The one new fact is that else is not a second question: once the if has run, a change it makes to a cannot make the part after else run too. Two ifs ask twice, so there both run.");
  ("Asked for by the human 2026-10-08, as the first of the lessons before while, and promised by the second box of Else and the last box of If and if not, which both say: as long as nothing changes a in between.");
  ("Every program starts its name at true. Not picked: starting it at false too, since then the first part never runs, nothing changes the name, and both shapes write out the second word alone, which shows nothing new.");
  ("Reading forwards, the wrong answers offered are the two of: the first word, the second word, both words, that are not the answer. Writing out the first word alone for two ifs is the mistake of reading the second if as else; writing out both for else is the mistake this lesson is about.");
  ("Reading backwards, the wrong program is the other shape with the same name and words: two ifs in place of else, or else in place of two ifs.");
  ("Every program names its value a or b, as in Else.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let bang = js_operator_bang_symbol();
  let fruits = fruits_of_the_spirit();
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function program_lines(name, words, with_else) {
    "let name = true; if (name) { console.log(first word); name = false; } then either else { console.log(second word); } or if (!name) { console.log(second word); }";
    let setup = js_code_let_statement(name, "true");
    let item = list_get(words, 0);
    let statement2 = logged(item);
    let change = js_code_assign_statement(name, "false");
    let yes = [statement2, change];
    let item2 = list_get(words, 1);
    let statement3 = logged(item2);
    let no = [statement3];
    let opposite = text_combine(bang, name);
    let if_yes = js_code_if_lines_multiple(name, yes);
    let if_no = js_code_if_lines_multiple(opposite, no);
    let if_lines = list_concat(if_yes, if_no);
    if (with_else) {
      if_lines = js_code_if_else_lines_multiple(name, yes, no);
    }
    let lines = list_concat([setup], if_lines);
    return lines;
  }
  function program_get(name, words, with_else) {
    let lines2 = program_lines(name, words, with_else);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs: two ifs with a and with b, else with a and with b, each with two different words";
    let cases = [
      ["a", false],
      ["b", false],
      ["a", true],
      ["b", true],
    ];
    function program_of(c) {
      let words2 = list_shuffle_take(fruits, 2);
      let item3 = list_get(c, 0);
      let item4 = list_get(c, 1);
      let code2 = program_get(item3, words2, item4);
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
  function words_of(code3) {
    "the two words a program writes: the first one it writes, and the one it writes when its name starts false instead";
    let written = eval_console_log_lines(code3);
    let lines3 = text_split_newline(written);
    let first = list_first(lines3);
    let flipped = app_code_if_boolean_flipped(code3);
    let second = eval_console_log_lines(flipped);
    let words4 = [first, second];
    return words4;
  }
  function decoys(question, answer) {
    "of the first word, the second word, and both words, the two that are not the answer";
    let words5 = words_of(question);
    let both = list_join_newline(words5);
    let candidates = list_concat(words5, [both]);
    let found = list_without(candidates, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the other shape with the same name and words";
    let lines4 = text_split_newline(answer);
    let opening = list_get(lines4, 1);
    let name3 = text_between(opening, "(", ")");
    let words6 = words_of(answer);
    let with_else2 = text_includes(answer, "else");
    let n = not(with_else2);
    let other = program_get(name3, words6, n);
    let found2 = [other];
    return found2;
  }
  function above(root, context) {
    "else remembered, then two ifs where the first changes a so both run, then the same with else, where only the first runs";
    let name4 = "a";
    let opposite2 = text_combine(bang, name4);
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let words7 = [love, joy];
    let change2 = js_code_assign_statement(name4, "false");
    let if_dots = js_code_if_dots(name4);
    let if_not_dots = js_code_if_dots(opposite2);
    let else_dots = js_code_else_dots();
    let say_love = logged(love);
    let say_joy = logged(joy);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_else, [
      "",
      else_dots,
      " says the same as ",
      if_not_dots,
      ", as long as nothing changes ",
      name4,
      " in between",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "But suppose ",
      if_dots,
      " changes ",
      name4,
      ":",
    ]);
    let ifs_lines = program_lines(name4, words7, false);
    let both_written = list_join_newline(words7);
    app_code_code_lines_writes_out(box_two, ifs_lines, both_written);
    html_div_cycle_code(box_two, [
      "",
      name4,
      " is ",
      "true",
      ", so the lines inside ",
      if_dots,
      " run",
    ]);
    html_div_cycle_code(box_two, [
      "",
      change2,
      " makes ",
      opposite2,
      " ",
      "true",
      ", so ",
      if_not_dots,
      " runs too, and ",
      say_joy,
      " is written out",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["", else_dots, " asks only once:"]);
    let else_lines = program_lines(name4, words7, true);
    app_code_code_lines_writes_out(box_three, else_lines, love);
    html_div_cycle_code(box_three, [
      "",
      name4,
      " was ",
      "true",
      " when ",
      if_dots,
      " asked, so ",
      say_love,
      " runs",
    ]);
    html_div_cycle_code(box_three, [
      "",
      else_dots,
      " is not asked again, so ",
      say_joy,
      " does not run, even though ",
      name4,
      " is now ",
      "false",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "So exactly one of ",
      if_dots,
      " and ",
      else_dots,
      " runs, whatever ",
      if_dots,
      " changes",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else asks once",
    "if (a) { a = false; } else",
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
