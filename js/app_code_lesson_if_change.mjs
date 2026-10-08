import { text_integers } from "./text_integers.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_plus_assign } from "./app_code_lesson_statement_name_plus_assign.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_change() {
  arguments_assert(arguments, 0);
  ("a change to a name inside an if: let n = 4; if (n < 5) { n += 3; } console.log(n); writes out 7, and with n starting at 6 writes out 6");
  ("The one new fact is that the line inside an if may change what a name holds, so what is written out after the if depends on whether the if ran. The line inside is one line, so this comes before Two lines in an if, as the human asked 2026-10-08.");
  ("Asked for by the human 2026-10-08, on the way to: if a number is even, halve it, otherwise multiply it by 3 and add 1.");
  ("The change is n += a number, where the lesson on += added a name to a name. Not picked: n = n + 3, the longer line, since += is the later and shorter lesson and the 3n + 1 step will be written with it.");
  ("Reading forwards, the wrong answers offered are the other of the two values n could end with, which a learner gives who reads the condition the wrong way, and the number added, which a learner gives who takes the line inside to write something out.");
  ("Reading backwards, the wrong program is the same program compared against a number that turns the if the other way: n < n's own starting value when the if runs, and one more than it when the if does not, so it writes out the other value.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; if (n < bound) { n += added; } console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let change = js_code_assign_operator_statement(name, plus, added);
    let if_lines = js_code_if_lines(condition, change);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat([code], if_lines);
    let whole = list_concat(lines, [statement]);
    return whole;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, two whose if runs and two whose if does not, each adding a number other than the one n starts at, and ending on a number other than the one n is compared against, so neither number in the program is the answer by chance";
    let trues = list_shuffle_take(
      [
        [2, 5, 4],
        [3, 8, 4],
        [1, 6, 3],
        [4, 9, 2],
      ],
      2,
    );
    let falses = list_shuffle_take(
      [
        [7, 4, 2],
        [6, 3, 4],
        [8, 5, 3],
        [9, 2, 5],
      ],
      2,
    );
    let triples = list_concat(trues, falses);
    function program_of(triple) {
      let start2 = list_get(triple, 0);
      let bound2 = list_get(triple, 1);
      let added2 = list_get(triple, 2);
      let code2 = program_get(start2, bound2, added2);
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
  function numbers_of(code3) {
    "[start, bound, added] read back from a program: they are its only numbers, in that order";
    "Not picked: finding each number by the text around it, such as < and a space, since the spaces the program is written with are ones that do not break and so match no space typed here.";
    let triple2 = text_integers(code3);
    return triple2;
  }
  function decoys(question, answer) {
    "the other value n could end with, and the number added";
    let triple3 = numbers_of(question);
    let start4 = list_get(triple3, 0);
    let added4 = list_get(triple3, 2);
    let sum = start4 + added4;
    let other = start4;
    let start_text = json_to(start4);
    let runs = not_equal(answer, start_text);
    if (not(runs)) {
      other = sum;
    }
    let found = list_map([other, added4], json_to);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number that turns the if the other way";
    let triple4 = numbers_of(answer);
    let start5 = list_get(triple4, 0);
    let bound5 = list_get(triple4, 1);
    let added5 = list_get(triple4, 2);
    let flipped = start5;
    let ran = less_than(start5, bound5);
    if (not(ran)) {
      flipped = start5 + 1;
    }
    let code4 = program_get(start5, flipped, added5);
    let found2 = [code4];
    return found2;
  }
  function above(root, context) {
    "+= remembered, then the same line inside an if that runs, then inside one that does not";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_statement_name_plus_assign,
      ["", "+=", " adds to what a name holds:"],
    );
    let code5 = js_code_let_statement(name, 4);
    let change2 = js_code_assign_operator_statement(name, plus, 3);
    let statement2 = js_code_console_log_statement(name);
    app_code_code_lines_writes_out(box_one, [code5, change2, statement2], "7");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put ",
      change2,
      " in an ",
      "if",
      ":",
    ]);
    let true_lines = program_lines(4, 5, 3);
    app_code_code_lines_writes_out(box_two, true_lines, "7");
    let true_condition = js_code_binary_spaced_nb(4, less, 5);
    html_div_cycle_code(box_two, [
      "",
      name,
      " is ",
      "4",
      " and ",
      true_condition,
      " is ",
      "true",
      ", so ",
      name,
      " becomes ",
      "7",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "6",
      ":",
    ]);
    let false_lines = program_lines(6, 5, 3);
    app_code_code_lines_writes_out(box_three, false_lines, "6");
    let false_condition = js_code_binary_spaced_nb(6, less, 5);
    html_div_cycle_code(box_three, [
      "",
      false_condition,
      " is ",
      "false",
      ", so ",
      name,
      " stays ",
      "6",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A change in an if",
    "if (n < 5) { n += 3; }",
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
