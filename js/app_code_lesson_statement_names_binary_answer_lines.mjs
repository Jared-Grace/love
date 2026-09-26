import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_names_binary_answer_lines(
  asked,
  answer_name,
) {
  arguments_assert(arguments, 2);
  ("the last lines of a program about a symbol between names: the answer written out directly, or given a name first and the name written out");
  ("A name for the answer is handed in by every lesson that comes after the learner has seen a worked-out value given a name. The one lesson that comes before that screen hands in null and writes the answer out directly, because giving it a name there would be a second new thing on a screen that has one.");
  ("The name says what the answer is - a difference, a product, whether one is bigger - so a learner reads what the line is for before working out what it holds.");
  if (equal(answer_name, null)) {
    let logged = js_code_console_log_statement(asked);
    let r = [logged];
    return r;
  }
  let held = js_code_let_statement(answer_name, asked);
  let logged_name = js_code_console_log_statement(answer_name);
  let r2 = [held, logged_name];
  return r2;
}
