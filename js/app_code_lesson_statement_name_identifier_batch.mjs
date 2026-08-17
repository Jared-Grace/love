import { add } from "./add.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit_identifiers } from "./fruits_of_the_spirit_identifiers.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_code_lesson_statement_name_identifier_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives one word a name, the name being another word, and then writes that name out");
  ("Four words are picked, and each program holds one of them and is named after the next one along, the last one named after the first. So every word on the screen is a name once and a value once, and neither reading of a word is the one it always has.");
  ("That is what puts a question's own name among the wrong answers it offers. Wrong answers are drawn from the other questions' answers, four questions fill all three wrong slots, and each word is somebody's answer - so a learner reading the code and reaching for the name instead of the value finds the name there to be reached for, and is told they are wrong. Under a lesson where every program is called the same one letter no such mistake can be offered at all, because the name is not a word anybody would think came out.");
  ("The words are the fruits of the Spirit that JS will accept as a name, so a word cannot be picked for the name half that would not run there.");
  let words = fruits_of_the_spirit_identifiers();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    ("the two lines that put one word under the next word along as a name, and write that name out");
    let next = add(index, 1);
    let name = list_get_wrap(picked, next);
    let quoted = app_code_string_code(word);
    let held = js_code_let_statement(name, quoted);
    let logged = js_code_console_log_statement(name);
    let lines = [held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
