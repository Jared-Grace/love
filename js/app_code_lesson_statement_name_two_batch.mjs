import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { add } from "./add.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_statement_name_two_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two words two names, and writes out one of them");
  ("The word that is NOT written out is the whole question. It is put there to be reached for, so it has to be offered as a wrong answer, and it is - four words are picked, each program holds one of them and the next one along, and every word is written out by exactly one program. So the word a program leaves behind is another program's answer, and is therefore a word worth offering. Whether it is offered is settled by the lesson, which asks for the words written in the program by name. The draw alone would have offered it about half the time, because wrong answers are pulled from batches of their own and each is a fresh shuffle of four words out of nine - and the other half a question could be got right by taking the one word the code and the buttons had in common.");
  ("Which of the two names is written out changes from program to program. Left always the second, a learner would find the answer by taking the last word on the screen and never read a name at all - which is the same passing-without-understanding this lesson exists to end.");
  ("The names are the two the lesson before last uses, in that order, so the first name is one a learner has been reading since the cup and the second is the only new thing here.");
  ("The words are the fruits of the Spirit as the string lessons have them, not the shorter list a name has to be spelled from - nothing here is named after a word.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  equal_not_assert_json(name_first, name_last, {
    hint: "this screen gives two values two names and both names would be the same word, so the second line would rename the first value rather than add a second",
  });
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    "the three lines that give two words two names and write one of the two out";
    let next = add(index, 1);
    let other = list_get_wrap(picked, next);
    ("the name that gets written out swaps every other program, so neither of the two lines is the answer's line more often than the other");
    let even = integer_even_is(index);
    let name_logged = ternary(even, name_last, name_first);
    let first_word = ternary(even, other, word);
    let last_word = ternary(even, word, other);
    let held_first = js_code_let_statement(
      name_first,
      app_code_string_code(first_word),
    );
    let held_last = js_code_let_statement(
      name_last,
      app_code_string_code(last_word),
    );
    let logged = js_code_console_log_statement(name_logged);
    let lines = [held_first, held_last, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
