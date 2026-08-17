import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { add } from "./add.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_again_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each puts one word under a name, puts a second word under the same name, and writes the name out");
  ("The word that was there first is the whole question. A learner who has not noticed that the lines happen in order reads the name, finds the line that made it, and answers with that - so that word has to be on the buttons, waiting. Four words are picked, each program ends up holding one of them and starts out holding the next one along, and every word is the answer of exactly one program; so the word a program throws away is another program's answer, and the three wrong answers are the other three questions' answers.");
  ("One name throughout, and always the same one letter. Nothing here is about what a name may be called - the lesson before last settled that - and a second name would put a second reason on the screen for a word not to come out.");
  ("The words are the fruits of the Spirit as the string lessons have them; no word here is used as a name.");
  let name = app_code_lesson_statement_name_value_name();
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    "the three lines that fill a cup, empty it into a second word, and write out what is left";
    let next = add(index, 1);
    let replaced = list_get_wrap(picked, next);
    equal_not_assert_json(replaced, word, {
      hint: "a program on this screen would put the same word under the name twice, so the answer would be right whether or not the second line was read",
    });
    let held = js_code_let_statement(name, app_code_string_code(replaced));
    let again = js_code_assign_statement(name, app_code_string_code(word));
    let logged = js_code_console_log_statement(name);
    let lines = [held, again, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
