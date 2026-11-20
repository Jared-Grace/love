import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_if_codes_halves } from "./app_learn_js_if_codes_halves.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_if_change } from "./app_learn_js_lesson_if_change.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_if_take_away_nine() {
  arguments_assert(arguments, 0);
  ("taking away 9 from a number above 9: let d = 14; if (d > 9) { d = d - 9; } console.log(d); writes out 5, and with d starting at 7 writes out 7");
  ("2026-11-20, at the human's asking (1y): the second lesson on the way to the Luhn check, after Double every second digit from the right and before the loop that does both. A doubled digit is at most 18; the check adds its two digits, and for 10 to 18 that is the same as taking away 9 (14 is 1 and 4, 1 + 4 = 5, and 14 - 9 = 5). Taught on one number first, as the human asked, so the loop lesson after it adds only the loop.");
  ("A set is four programs, two starting from 10 to 18 and two from 1 to 8, in halves each holding one of each. 9 is never drawn: with 9 the check d < 9 and the check d > 9 both come out false and write out the same.");
  ("Reading forwards, the wrong answers are d as it was, d with 9 taken away and d with 10 taken away, whichever of them is not the answer. Reading backwards, the wrong programs are taking away 10, the same line with no if, and the check d < 9, whichever write out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let greater = js_operator_greater_than_symbol();
  let less = js_operator_less_than_symbol();
  let minus = js_operator_minus_symbol();
  let plus = js_operator_plus_symbol();
  let name = "d";
  function program_lines(start, operator, taken, with_if) {
    "let d = start; if (d operator 9) { d = d - taken; } console.log(d); with no if around the change when with_if is false";
    let setup = js_code_let_statement(name, start);
    let right = js_code_binary_spaced_nb(name, minus, taken);
    let change = js_code_assign_statement(name, right);
    let condition = js_code_binary_spaced_nb(name, operator, 9);
    let middle = [change];
    if (with_if) {
      middle = js_code_if_lines(condition, change);
    }
    let statement = js_code_console_log_statement(name);
    let whole = list_concat_multiple([[setup], middle, [statement]]);
    return whole;
  }
  function program_get(start2, operator2, taken2, with_if2) {
    let lines = program_lines(start2, operator2, taken2, with_if2);
    let joined = list_join_newline(lines);
    return joined;
  }
  function program_of(start3) {
    let code = program_get(start3, greater, 9, true);
    return code;
  }
  function batch_get() {
    "two numbers from 10 to 18 and two from 1 to 8, in halves each holding one of each";
    let bigs = list_shuffle_take([10, 11, 12, 13, 14, 15, 16, 17, 18], 2);
    let smalls = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8], 2);
    let starts = list_concat(bigs, smalls);
    let codes = list_map(starts, program_of);
    let ordered = app_learn_js_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function start_of(code2) {
    "the number d starts at: the first number in the program";
    let numbers = text_integers(code2);
    let start4 = list_first(numbers);
    return start4;
  }
  function decoys(question, answer) {
    "d as it was, d less 9 and d less 10, never the answer";
    let start5 = start_of(question);
    let v = program_get(start5, greater, 9, false);
    let v2 = program_get(start5, greater, 10, false);
    let kept = list_map([v, v2], eval_console_log_lines);
    let unchanged = json_to(start5);
    let candidates = list_concat([unchanged], kept);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "taking away 10, the same line with no if, and the check d < 9, whichever write out something else";
    let start6 = start_of(answer);
    let w = program_get(start6, greater, 10, true);
    let w2 = program_get(start6, greater, 9, false);
    let w3 = program_get(start6, less, 9, true);
    let out_answer = eval_console_log_lines(answer);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let found2 = list_filter([w, w2, w3], differs);
    return found2;
  }
  function above(root, context) {
    "a change in an if remembered, then taking away 9 from 14, why that adds its digits, then 7 left as it is";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_if_change,
      [
        "the line inside an ",
        "if",
        " changes a name only when the check is ",
        "true",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "When ",
      name,
      " is more than ",
      "9",
      ", take ",
      "9",
      " away:",
    ]);
    let big_lines = program_lines(14, greater, 9, true);
    app_learn_js_code_lines_writes_out(box_two, big_lines, "5");
    let big_condition = js_code_binary_spaced_nb(14, greater, 9);
    let fourteen_less = js_code_binary_spaced_nb(14, minus, 9);
    let digits_added = js_code_binary_spaced_nb(1, plus, 4);
    app_learn_js_div_cycle_code(box_two, [
      "",
      big_condition,
      " is ",
      "true",
      ", so ",
      name,
      " becomes ",
      fourteen_less,
      ", which is ",
      "5",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "14",
      " is a ",
      "1",
      " and a ",
      "4",
      ", and ",
      digits_added,
      " is ",
      "5",
      " too: for ",
      "10",
      " to ",
      "18",
      ", taking away ",
      "9",
      " adds the two digits",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "7",
      ":",
    ]);
    let small_lines = program_lines(7, greater, 9, true);
    app_learn_js_code_lines_writes_out(box_three, small_lines, "7");
    let small_condition = js_code_binary_spaced_nb(7, greater, 9);
    app_learn_js_div_cycle_code(box_three, [
      "",
      small_condition,
      " is ",
      "false",
      ", so ",
      name,
      " stays ",
      "7",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Take away 9 above 9",
    "if (d > 9) { d = d - 9; }",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
