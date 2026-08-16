import { app_code_lesson_statement_name_value_two_names } from "./app_code_lesson_statement_name_value_two_names.mjs";
import { app_code_lesson_statement_name_value_pair_codes } from "./app_code_lesson_statement_name_value_pair_codes.mjs";
import { app_code_lesson_statement_name_value_batch } from "./app_code_lesson_statement_name_value_batch.mjs";
import { app_code_lesson_statement_name_value_above } from "./app_code_lesson_statement_name_value_above.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_statement_name_value_title_name_id } from "./app_code_lesson_statement_name_value_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_statement_name_value() {
  arguments_assert(arguments, 0);
  ("giving a value a name, and reading it back: let a = 3; on one line and console.log(a); on the next writes out 3");
  ("The one new fact, and the first lesson in the course whose code stands on more than one line. Everything up to here has been one line that comes to a value. Here the first line does not write anything out at all - it puts a value away under a name - and the second line hands that name to console.log and gets the value back.");
  ("The harder examples give two values names and write out only one of them. That is where the lesson can be got wrong: the name that was not asked for is sitting right there on the screen, and its value is offered as one of the answers, because it is the answer of another question in the same set.");
  ("Nothing is said here about which line happens first. Both lines have to happen, and in this order, but a learner who has not thought about that still gets every question right - the order is used and not yet named. It is named later, when a value is given a name twice and only the second one survives.");
  ("Building the code from tokens is left switched off. The order the words of two lines go in is a second thing to learn, and this lesson is about the name.");
  let name_id = app_code_lesson_statement_name_value_title_name_id();
  let log_name = js_console_log_name();
  let name_a = "a";
  let name_b = "b";
  function log_of(name) {
    "the line that writes a name out";
    let call = js_code_call_arg(log_name, name);
    let code = js_code_statement(call);
    return code;
  }
  function held_of(name, value) {
    "the line that gives a value a name";
    let right = text_to(value);
    let code = js_code_let_statement(name, right);
    return code;
  }
  function one_name(value) {
    "a name given a value, and that same name written out";
    let v = held_of(name_a, value);
    let v2 = log_of(name_a);
    let lines = [v, v2];
    let code = list_join_newline(lines);
    return code;
  }
  function two_names(other, value) {
    let r4 = app_code_lesson_statement_name_value_two_names(
      other,
      value,
      held_of,
      name_a,
      name_b,
      log_of,
    );
    return r4;
  }
  function number_of(index) {
    "the numbers a value may be, one through the largest this course uses";
    let number = add(index, 1);
    return number;
  }
  function pair_to_codes(pair) {
    let r3 = app_code_lesson_statement_name_value_pair_codes(
      pair,
      one_name,
      two_names,
    );
    return r3;
  }
  function batch_get() {
    let r2 = app_code_lesson_statement_name_value_batch(
      number_of,
      pair_to_codes,
    );
    return r2;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  function above(root) {
    let r = app_code_lesson_statement_name_value_above(
      root,
      held_of,
      name_a,
      log_name,
      log_of,
      name_b,
    );
    return r;
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
