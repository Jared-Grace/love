import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
export function app_code_lesson_statement_name_value_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives one word a name and then writes that name out");
  ("All four are the same two lines with a different word in them, because the one thing being asked is whether a name hands back what was put under it. A second shape on the same screen would be a second question.");
  ("The four words are different from each other, because the wrong answers a question offers are the other questions' answers, and two questions coming out the same would put two right buttons on one screen.");
  ("The words are the ones the string lessons draw from, so the only thing here a learner has not met is the name.");
  let names = app_code_lesson_statement_name_value_names();
  let name = list_first(names);
  function program_of(word) {
    "the two lines that give one word a name and write that name out";
    let quoted = app_code_string_code(word);
    let held = js_code_let_statement(name, quoted);
    let logged = js_code_console_log_statement(name);
    let lines = [held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let words = fruits_of_the_spirit();
  let codes = list_shuffle_take_map(words, 4, program_of);
  return codes;
}
