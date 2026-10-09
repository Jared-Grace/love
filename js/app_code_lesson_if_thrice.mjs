import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_twice } from "./app_code_lesson_if_twice.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_thrice() {
  arguments_assert(arguments, 0);
  ("the same if written three times: let n = 1; if (n < 9) { n += 3; } three times, then console.log(n); writes out 10, and with n starting at 3 and compared against 8 writes out 9");
  ("The one new fact is that each if asks about n as the if before it left it, so the same if written three times may run three times, twice, once, or not at all. It is The same if twice with one more if, so the learner meets the counting once more before while does it with no limit.");
  ("Asked for by the human 2026-10-09 as its own lesson, before while is introduced.");
  ("Each screen has one program for each count of runs: three, two, one and none.");
  ("Reading forwards, the answer is one of four numbers - where n starts, and n after one, two and three changes - and the wrong answers offered are the other three, so every way of miscounting the runs is offered.");
  ("Reading backwards, the wrong program is the same program compared against another number: n after one change when all three run, so only the first does; and one more than n after two changes otherwise, so all three run.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program, as in The same if twice.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; if (n < bound) { n += added; } three times, then console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let change = js_code_assign_operator_statement(name, plus, added);
    let if_lines = js_code_if_lines(condition, change);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat_multiple([
      [code],
      if_lines,
      if_lines,
      if_lines,
      [statement],
    ]);
    return lines;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs: one where all three ifs run, one where two do, one where one does, one where none does";
    let three = list_random_item([
      [1, 9, 3],
      [2, 9, 2],
      [1, 8, 2],
    ]);
    let two = list_random_item([
      [1, 6, 3],
      [2, 5, 2],
      [3, 8, 3],
    ]);
    let one = list_random_item([
      [3, 5, 4],
      [2, 4, 3],
      [4, 6, 5],
    ]);
    let none = list_random_item([
      [6, 4, 2],
      [9, 5, 3],
      [7, 3, 2],
    ]);
    let triples = [three, two, none, one];
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code2 = program_get(item, item2, item3);
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
  function ends_of(code3) {
    "[where n starts, n after one change, after two, after three], from the program's numbers [start, bound, added, ...]";
    let numbers = text_integers(code3);
    let start2 = list_get(numbers, 0);
    let added2 = list_get(numbers, 2);
    let once = start2 + added2;
    let twice = once + added2;
    let thrice = twice + added2;
    let ends = [start2, once, twice, thrice];
    return ends;
  }
  function decoys(question, answer) {
    "the three numbers n could end on that it does not";
    let ends = ends_of(question);
    let texts = list_map(ends, json_to);
    function other_is(t) {
      let o = not_equal(t, answer);
      return o;
    }
    let found = list_filter(texts, other_is);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number that makes the ifs run a different number of times";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let added3 = list_get(numbers2, 2);
    let ends2 = ends_of(answer);
    let once2 = list_get(ends2, 1);
    let twice2 = list_get(ends2, 2);
    let thrice2 = list_get(ends2, 3);
    let written = eval_console_log_lines(answer);
    let thrice_text = json_to(thrice2);
    let bound_other = twice2 + 1;
    if (equal(written, thrice_text)) {
      bound_other = once2;
    }
    let code4 = program_get(start3, bound_other, added3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after, runs) {
    "value < bound is true, so n becomes value_after; or is false, so n stays value";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let v = json_to(value);
    if (runs) {
      let after = json_to(value_after);
      html_div_cycle_code(root, [
        "",
        condition2,
        " is ",
        "true",
        ", so ",
        name,
        " becomes ",
        after,
      ]);
      return;
    }
    html_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "false",
      ", so ",
      name,
      " stays ",
      v,
    ]);
  }
  function above(root, context) {
    "the same if twice remembered, then three times, running three times and then twice";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_twice, [
      "the same ",
      "if",
      " can be written twice",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can write the same ",
      "if",
      " three times:",
    ]);
    let thrice_lines = program_lines(1, 9, 3);
    app_code_code_lines_writes_out(box_two, thrice_lines, "10");
    said(box_two, 1, 9, 4, true);
    said(box_two, 4, 9, 7, true);
    said(box_two, 7, 9, 10, true);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "3",
      " and is compared against ",
      "8",
      ":",
    ]);
    let twice_lines = program_lines(3, 8, 3);
    app_code_code_lines_writes_out(box_three, twice_lines, "9");
    said(box_three, 3, 8, 6, true);
    said(box_three, 6, 8, 9, true);
    said(box_three, 9, 8, 9, false);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The same if three times",
    "if ... if ... if ...",
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
