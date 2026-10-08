import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_else_lines } from "./js_code_if_else_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { less_than } from "./less_than.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_else } from "./app_code_lesson_if_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_else_change() {
  arguments_assert(arguments, 0);
  ("a change on each side of an else: let n = 4; if (n < 5) { n += 3; } else { n *= 2; } console.log(n); writes out 7, and with n starting at 6 writes out 12");
  ("The one new fact is that each side of an else may change a name, as the line in A change in an if did, so what is written out after it depends on which side ran. It comes before the step the human asked for 2026-10-08 - halve an even number, otherwise times 3 plus 1 - which is this shape with the even check.");
  ("Reading forwards, the wrong answers offered are the other side's change, which a learner gives who reads the condition the wrong way, and both changes one after the other, which a learner gives who reads else as a line that always runs.");
  ("Reading backwards, the wrong program is the same program compared against a number that turns the if the other way: n's own starting value when the if runs, and one more than it when it does not.");
  ("No program's two sides give the same number, and none ends on the number n is compared against.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  function program_lines(start, bound, added, multiplier) {
    "let n = start; if (n < bound) { n += added; } else { n *= multiplier; } console.log(n);";
    let setup = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let yes = js_code_assign_operator_statement(name, plus, added);
    let no = js_code_assign_operator_statement(name, times, multiplier);
    let if_lines = js_code_if_else_lines(condition, yes, no);
    let statement = js_code_console_log_statement(name);
    let whole = list_concat_multiple([[setup], if_lines, [statement]]);
    return whole;
  }
  function program_get(start2, bound2, added2, multiplier2) {
    let lines = program_lines(start2, bound2, added2, multiplier2);
    let joined = list_join_newline(lines);
    return joined;
  }
  function program_of(four) {
    let item = list_get(four, 0);
    let item2 = list_get(four, 1);
    let item3 = list_get(four, 2);
    let item4 = list_get(four, 3);
    let code = program_get(item, item2, item3, item4);
    return code;
  }
  function batch_get() {
    "four programs as [start, bound, added, multiplier], two whose if runs and two whose else runs";
    let trues = list_shuffle_take(
      [
        [2, 5, 4, 5],
        [3, 8, 4, 2],
        [1, 6, 3, 5],
        [4, 9, 2, 3],
      ],
      2,
    );
    let falses = list_shuffle_take(
      [
        [7, 4, 2, 3],
        [6, 3, 4, 2],
        [8, 5, 3, 2],
        [9, 2, 5, 2],
      ],
      2,
    );
    let fours = list_concat(trues, falses);
    let codes = list_map(fours, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other side's change, and both changes one after the other";
    let numbers = text_integers(question);
    let start3 = list_get(numbers, 0);
    let bound3 = list_get(numbers, 1);
    let added3 = list_get(numbers, 2);
    let multiplier3 = list_get(numbers, 3);
    let other = start3 + added3;
    let both = start3 * multiplier3 + added3;
    let ran = less_than(start3, bound3);
    if (ran) {
      other = start3 * multiplier3;
      both = (start3 + added3) * multiplier3;
    }
    let found = list_map([other, both], json_to);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number that turns the if the other way";
    let numbers2 = text_integers(answer);
    let start4 = list_get(numbers2, 0);
    let bound4 = list_get(numbers2, 1);
    let flipped = start4 + 1;
    let ran2 = less_than(start4, bound4);
    if (ran2) {
      flipped = start4;
    }
    let item5 = list_get(numbers2, 2);
    let item6 = list_get(numbers2, 3);
    let code2 = program_get(start4, flipped, item5, item6);
    let found2 = [code2];
    return found2;
  }
  function above(root, context) {
    "else remembered, then a change on each side, with the if running and then the else";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_else, [
      "",
      "else",
      " runs when the ",
      "if",
      " does not",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["Each side can change a name:"]);
    let true_lines = program_lines(4, 5, 3, 2);
    app_code_code_lines_writes_out(box_two, true_lines, "7");
    let true_condition = js_code_binary_spaced_nb(4, less, 5);
    let yes2 = js_code_assign_operator_statement(name, plus, 3);
    html_div_cycle_code(box_two, [
      "",
      true_condition,
      " is ",
      "true",
      ", so ",
      yes2,
      " runs",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "6",
      ":",
    ]);
    let false_lines = program_lines(6, 5, 3, 2);
    app_code_code_lines_writes_out(box_three, false_lines, "12");
    let false_condition = js_code_binary_spaced_nb(6, less, 5);
    let no2 = js_code_assign_operator_statement(name, times, 2);
    html_div_cycle_code(box_three, [
      "",
      false_condition,
      " is ",
      "false",
      ", so ",
      no2,
      " runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else with changes",
    "if (n < 5) { n += 3; } else { n *= 2; }",
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
