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
import { list_shuffle_take } from "./list_shuffle_take.mjs";
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
import { app_code_lesson_if_change } from "./app_code_lesson_if_change.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_twice() {
  arguments_assert(arguments, 0);
  ("the same if written twice: let n = 1; if (n < 5) { n += 3; } if (n < 5) { n += 3; } console.log(n); writes out 7, and with n starting at 3 writes out 6");
  ("The one new fact is that the first if can change whether the second runs, because the second asks about n after the first has changed it. So the same if written twice may run twice, once, or not at all.");
  ("Asked for by the human 2026-10-08, as the road to while: the same if written over and over is what while (n < 5) does, so this comes before while, and before if beside if (!a) and else.");
  ("Reading forwards, the answer is one of three numbers - where n starts, n after one change, and n after two - and the wrong answers offered are the other two, so every way of miscounting the runs is offered.");
  ("Reading backwards, the wrong program is the same program compared against another number that makes the ifs run a different number of times: one more than n after one change when both do not run, so both run; and n after one change when both run, so only the first does.");
  ("Not offered: a program where only the second if runs, since n only grows, so once the first does not run neither does the second.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, since n < 5 with n at 5 is a question of its own.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; if (n < bound) { n += added; } twice, then console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let change = js_code_assign_operator_statement(name, plus, added);
    let if_lines = js_code_if_lines(condition, change);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat_multiple([[code], if_lines, if_lines, [statement]]);
    return lines;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs: one where both ifs run, two where only the first does, one where neither does";
    let both = list_random_item([
      [1, 8, 3],
      [2, 9, 2],
      [1, 7, 2],
    ]);
    let firsts = list_shuffle_take(
      [
        [3, 5, 4],
        [2, 4, 3],
        [4, 6, 5],
      ],
      2,
    );
    let neither = list_random_item([
      [6, 4, 2],
      [9, 5, 3],
      [7, 3, 2],
    ]);
    let item = list_get(firsts, 0);
    let item2 = list_get(firsts, 1);
    let triples = [both, item, neither, item2];
    function program_of(triple) {
      let item3 = list_get(triple, 0);
      let item4 = list_get(triple, 1);
      let item5 = list_get(triple, 2);
      let code2 = program_get(item3, item4, item5);
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
    "[where n starts, n after one change, n after two], from the program's numbers [start, bound, added, bound, added]";
    let numbers = text_integers(code3);
    let start2 = list_get(numbers, 0);
    let added2 = list_get(numbers, 2);
    let once = start2 + added2;
    let twice = once + added2;
    let ends = [start2, once, twice];
    return ends;
  }
  function decoys(question, answer) {
    "the two numbers n could end on that it does not";
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
    let written = eval_console_log_lines(answer);
    let twice_text = json_to(twice2);
    let bound_other = once2 + 1;
    if (equal(written, twice_text)) {
      bound_other = once2;
    }
    let code4 = program_get(start3, bound_other, added3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, value_after, runs) {
    "value < 5 is true, so n becomes value_after; or is false, so n stays value";
    let condition2 = js_code_binary_spaced_nb(value, less, 5);
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
    "one if remembered, then the same if twice, running twice and then once";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_change, [
      "the line inside an ",
      "if",
      " can change a name:",
    ]);
    let code5 = js_code_let_statement(name, 1);
    let condition3 = js_code_binary_spaced_nb(name, less, 5);
    let change2 = js_code_assign_operator_statement(name, plus, 3);
    let if_lines2 = js_code_if_lines(condition3, change2);
    let statement2 = js_code_console_log_statement(name);
    let one_if = list_concat_multiple([[code5], if_lines2, [statement2]]);
    app_code_code_lines_writes_out(box_one, one_if, "4");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["We can write the same ", "if", " twice:"]);
    let twice_lines = program_lines(1, 5, 3);
    app_code_code_lines_writes_out(box_two, twice_lines, "7");
    said(box_two, 1, 4, true);
    said(box_two, 4, 7, true);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "3",
      ":",
    ]);
    let once_lines = program_lines(3, 5, 3);
    app_code_code_lines_writes_out(box_three, once_lines, "6");
    said(box_three, 3, 6, true);
    said(box_three, 6, 6, false);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The same if twice",
    "if (n < 5) ... if (n < 5) ...",
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
