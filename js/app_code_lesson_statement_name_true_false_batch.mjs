import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_true_false_batch() {
  arguments_assert(arguments, 0);
  ("the two programs this lesson has: one gives true a name and writes that name out, the other does the same with false");
  ("The lesson that first gave a value a name gave it a word. This one gives it true or false and changes nothing else, so the only thing a learner is asked to accept is that a name holds these two values the way it holds a word.");
  ("Two programs and no more, because there are only two: the name is fixed, so the value is the one thing that can differ, and it can be only true or false. So the examples screen shows both and is complete. Four programs were tried first, two of each; a question then offered the same program twice as two answers.");
  ("Shuffled, because the quizzes ask about the batch in its order, and a fixed order would always ask about true first.");
  let name = app_code_lesson_statement_name_value_name();
  let t = js_keyword_true();
  let f = js_keyword_false();
  let values = list_shuffle_take([t, f], 2);
  function program_of(value) {
    "the two lines that give true or false a name and write that name out";
    let held = js_code_let_statement(name, value);
    let logged = js_code_console_log_statement(name);
    let lines = [held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(values, program_of);
  return codes;
}
