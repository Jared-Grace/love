import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_if_condition_set } from "./app_code_if_condition_set.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_even } from "./app_code_lesson_statement_name_even.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_even() {
  arguments_assert(arguments, 0);
  ('an if whose condition is the even check: let n = 4; console.log(n + " is a number"); if (n % 2 === 0) { console.log(n + " is even"); } writes out 4 is a number and 4 is even, and with 5 writes out 5 is a number alone');
  ('Asked for by the human 2026-10-07: log(n + " is a number") then if (...) { log(n + " is even") }. The check is the one the even lesson put in a name, n % 2 === 0, here put inside the parentheses instead.');
  ("Each screen asks two even numbers and two odd numbers, in two halves each holding one of each, so the two examples drawn together show both ways. 0 is left out: the even lesson already asks it, and here the number is written out twice, where a 0 reads oddly.");
  ("Reading forwards, the wrong answers offered are the other two of the three things such a program could write out: both lines, the first line alone, and the line inside the braces alone. Reading backwards, the wrong program offered is the same number checked with === 1, which writes out the other answer. Not picked: the same check with another number, since the number alone, even or odd, would give the answer away without reading the if.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let name = "n";
  let plus = js_operator_plus_symbol();
  let percent = js_operator_percent_symbol();
  let same = js_operator_triple_equal_symbol();
  let brace_left = js_code_brace_left();
  let brace_right = js_code_brace_right();
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let remainder = js_code_binary_spaced_nb(name, percent, "2");
  function check(left_over) {
    "n % 2 === left_over";
    let c = js_code_binary_spaced_nb(remainder, same, left_over);
    return c;
  }
  let even_check = check("0");
  function logged(ending) {
    'console.log(n + " ending");';
    let right2 = app_code_string_code(ending);
    let joined = js_code_binary_spaced_nb(name, plus, right2);
    let s = js_code_console_log_statement(joined);
    return s;
  }
  function program_lines(number) {
    "the number named, written out, then written out again as even inside the if";
    let statement = logged(" is even");
    let if_lines = js_code_if_lines(even_check, statement);
    let right3 = json_to(number);
    let code2 = js_code_let_statement(name, right3);
    let v = logged(" is a number");
    let lines = list_concat([code2, v], if_lines);
    return lines;
  }
  function program_get(number) {
    let list = program_lines(number);
    let code = list_join_newline(list);
    return code;
  }
  function batch_get() {
    "two even and two odd numbers, in two halves each holding one of each";
    let evens = list_shuffle_take([2, 4, 6, 8, 10, 12, 14, 16, 18], 2);
    let odds = list_shuffle_take([1, 3, 5, 7, 9, 11, 13, 15, 17], 2);
    let first = list_first(evens);
    let first2 = list_first(odds);
    let one_half = [first, first2];
    let last = list_last(evens);
    let last2 = list_last(odds);
    let other_half = [last, last2];
    each([one_half, other_half], list_shuffle);
    let ordered = list_concat(one_half, other_half);
    let codes = list_map(ordered, program_get);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "of the three things such a program could write out - both lines, the first line, the line inside - the two that are not the answer";
    let code3 = app_code_if_condition_set(question, "true");
    let both = eval_console_log_lines(code3);
    let code4 = app_code_if_condition_set(question, "false");
    let plain = eval_console_log_lines(code4);
    let list2 = text_split_newline(both);
    let inside = list_last(list2);
    let all = [both, plain, inside];
    function wrong(one) {
      let w = not_equal(one, answer);
      return w;
    }
    let found = list_filter(all, wrong);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program checked with === 1, so it writes out the other answer";
    let condition = check("1");
    let turned = app_code_if_condition_set(answer, condition);
    let found = [turned];
    return found;
  }
  function above(root, context) {
    "the even check remembered, then put inside an if, with an even number and then an odd one";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_statement_name_even,
      ["", even_check, " is ", "true", " when ", name, " is even"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put that check inside ",
      left,
      " and ",
      right,
      ":",
    ]);
    let even_code = program_get(4);
    let lines2 = program_lines(4);
    let value = eval_console_log_lines(even_code);
    app_code_code_lines_writes_out(box_two, lines2, value);
    let combined = js_code_binary_spaced_nb(4, percent, 2);
    html_div_cycle_code(box_two, ["", combined, " is ", "0"]);
    let left2 = js_code_binary_spaced_nb(4, percent, 2);
    let combined2 = js_code_binary_spaced_nb(left2, same, 0);
    html_div_cycle_code(box_two, ["So ", combined2, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", name, " is ", "5", ":"]);
    let odd_code = program_get(5);
    let lines3 = program_lines(5);
    let value2 = eval_console_log_lines(odd_code);
    app_code_code_lines_writes_out(box_three, lines3, value2);
    let combined3 = js_code_binary_spaced_nb(5, percent, 2);
    html_div_cycle_code(box_three, ["", combined3, " is ", "1"]);
    let left3 = js_code_binary_spaced_nb(5, percent, 2);
    let combined4 = js_code_binary_spaced_nb(left3, same, 0);
    html_div_cycle_code(box_three, ["So ", combined4, " is ", "false"]);
    html_div_cycle_code(box_three, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id_dots(
    "If even",
    "if (n % 2 === 0) { ... }",
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
