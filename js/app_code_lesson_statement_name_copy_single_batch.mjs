import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_copy_single_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a word to a name, gives a second name what the first one holds, and writes the second one out");
  ("One word per program, so the only new thing is the name with no quote marks on the right of the equals. Choosing which of two names was copied is the lesson after this one.");
  ("Four different words, so the four answers are four different words and every wrong answer a question offers is another question's answer.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word) {
    "the three lines that give a word to a name, give a second name what the first one holds, and write out the second one";
    let quoted = app_code_string_code(word);
    let held = js_code_let_statement(name_first, quoted);
    let copied = js_code_let_statement(name_last, name_first);
    let logged = js_code_console_log_statement(name_last);
    let lines = [held, copied, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(picked, program_of);
  return codes;
}
