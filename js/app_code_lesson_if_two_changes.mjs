import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { not } from "./not.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_change } from "./app_code_lesson_if_change.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_two_changes() {
  arguments_assert(arguments, 0);
  ("two changes to a name inside an if: let n = 4; if (n < 5) { n *= 3; n += 1; } console.log(n); writes out 13, and with the two lines the other way round writes out 15");
  ("The one new fact is that the lines inside an if run in the order they are written, so two changes to the same name give a different number the other way round. A change in an if showed one change; Two lines in an if showed that every line inside runs; this puts the two together.");
  ("Asked for by the human 2026-10-08 as more practice with an if of more than one line before else, on the way to: if a number is even, halve it, otherwise multiply it by 3 and add 1. The two changes are that odd half, n *= 3 then n += 1.");
  ("Reading forwards, the wrong answers offered when the if runs are the two lines run the other way round, and the first line alone, as though the if held only one line; when it does not run, the number the if would have made, and the first line alone again.");
  ("Reading backwards, the wrong program when the if runs is the same program with its two lines inside swapped, which is the point of the lesson. When the if does not run, swapping them changes nothing, so the wrong program is compared against one more than where n starts, which makes the if run, as in A change in an if.");
  ("The numbers are chosen so that when the if runs the answer is not a number written in the program; when it does not, the answer is where n starts, which has to be written there.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  function program_lines(start, bound, multiplier, added, times_first) {
    "let n = start; if (n < bound) { n *= multiplier; n += added; } console.log(n); with the two lines inside swapped when times_first is false";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let product = js_code_assign_operator_statement(name, times, multiplier);
    let sum = js_code_assign_operator_statement(name, plus, added);
    let insides = [product, sum];
    if (not(times_first)) {
      insides = [sum, product];
    }
    let if_lines = js_code_if_lines_multiple(condition, insides);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat_multiple([[code], if_lines, [statement]]);
    return lines;
  }
  function program_get(start, bound, multiplier, added, times_first) {
    let lines2 = program_lines(start, bound, multiplier, added, times_first);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, two whose if runs and two whose if does not";
    let trues = list_shuffle_take(
      [
        [2, 5, 3, 1],
        [3, 6, 2, 4],
        [4, 7, 2, 3],
        [2, 9, 4, 3],
      ],
      2,
    );
    let falses = list_shuffle_take(
      [
        [6, 4, 2, 1],
        [5, 3, 3, 2],
        [8, 5, 2, 3],
        [7, 2, 3, 1],
      ],
      2,
    );
    let quads = list_concat(trues, falses);
    function program_of(quad) {
      let code2 = program_get(
        list_get(quad, 0),
        list_get(quad, 1),
        list_get(quad, 2),
        list_get(quad, 3),
        true,
      );
      return code2;
    }
    let codes = list_map(quads, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "when the if runs: the lines the other way round, and the first line alone; when it does not: what the if would have made, and the first line alone";
    "The numbers are [start, bound, multiplier, added], the program's only numbers, in that order.";
    let quad2 = text_integers(question);
    let start2 = list_get(quad2, 0);
    let multiplier2 = list_get(quad2, 2);
    let added2 = list_get(quad2, 3);
    let first_only = start2 * multiplier2;
    let start_text = json_to(start2);
    let runs = not_equal(answer, start_text);
    let other = first_only + added2;
    if (runs) {
      other = (start2 + added2) * multiplier2;
    }
    let found = list_map([other, first_only], json_to);
    return found;
  }
  function backwards_decoys(question, answer) {
    "when the if runs, the same program with its two lines inside swapped; when it does not, the same program compared against one more than where n starts";
    let quad3 = text_integers(answer);
    let start3 = list_get(quad3, 0);
    let bound3 = list_get(quad3, 1);
    let multiplier3 = list_get(quad3, 2);
    let added3 = list_get(quad3, 3);
    let ran = start3 < bound3;
    let code3 = program_get(start3, bound3, multiplier3, added3, false);
    if (not(ran)) {
      code3 = program_get(start3, start3 + 1, multiplier3, added3, true);
    }
    let found2 = [code3];
    return found2;
  }
  function above(root, context) {
    "one change in an if remembered, then two, then the same two the other way round";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_change, [
      "the line inside an ",
      "if",
      " can change a name:",
    ]);
    let code4 = js_code_let_statement(name, 4);
    let condition2 = js_code_binary_spaced_nb(name, less, 5);
    let change = js_code_assign_operator_statement(name, plus, 3);
    let if_lines2 = js_code_if_lines(condition2, change);
    let statement2 = js_code_console_log_statement(name);
    let one_change = list_concat_multiple([[code4], if_lines2, [statement2]]);
    app_code_code_lines_writes_out(box_one, one_change, "7");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["An ", "if", " can hold two changes:"]);
    let times_lines = program_lines(4, 5, 3, 1, true);
    app_code_code_lines_writes_out(box_two, times_lines, "13");
    let four_times = js_code_binary_spaced_nb(4, times, 3);
    let twelve_plus = js_code_binary_spaced_nb(12, plus, 1);
    html_div_cycle_code(box_two, [
      "The lines run in order: ",
      four_times,
      " is ",
      "12",
      ", then ",
      twelve_plus,
      " is ",
      "13",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose we swap the two lines:"]);
    let plus_lines = program_lines(4, 5, 3, 1, false);
    app_code_code_lines_writes_out(box_three, plus_lines, "15");
    let four_plus = js_code_binary_spaced_nb(4, plus, 1);
    let five_times = js_code_binary_spaced_nb(5, times, 3);
    html_div_cycle_code(box_three, [
      "Now ",
      four_plus,
      " is ",
      "5",
      ", then ",
      five_times,
      " is ",
      "15",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two changes in an if",
    "if (n < 5) { n *= 3; n += 1; }",
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
