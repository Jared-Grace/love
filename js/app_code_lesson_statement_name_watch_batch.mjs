import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_watch_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each puts one word under a name, writes the name out, puts a second word under the same name, and writes the name out again");
  ("The same name is written out twice, and the two answers differ. That difference is the whole lesson: a line that writes out a name writes what the name holds at that moment, so the same line written twice can say two different things.");
  ("The programs are the lesson just before's with one line added - the first writing-out, above the change - so nothing on the screen is new except that line. Words rather than numbers for the same reason: no working out is asked, only reading which word the name holds when each line runs.");
  ("Four words are picked and each program moves from one of them to the next one round, so the two words of a program always differ and the four answers are four different pairs.");
  let name = app_code_lesson_statement_name_value_name();
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    "the four lines that put a word under a name, write it out, put another word under it, and write it out again";
    let next = add(index, 1);
    let replaced = list_get_wrap(picked, next);
    equal_not_assert_json(replaced, word, {
      hint: "a program on this screen would put the same word under the name twice, so both writings-out would be the same and there would be no change to watch",
    });
    let right = app_code_string_code(replaced);
    let held = js_code_let_statement(name, right);
    let right2 = app_code_string_code(word);
    let again = js_code_assign_statement(name, right2);
    let logged = js_code_console_log_statement(name);
    let lines = [held, logged, again, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
