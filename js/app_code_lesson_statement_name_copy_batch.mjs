import { add } from "./add.mjs";
import { app_code_lesson_statement_name_copy_name } from "./app_code_lesson_statement_name_copy_name.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_first } from "./list_first.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_last } from "./list_last.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_statement_name_copy_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two words two names, gives a third name what is inside one of those two, and writes the third one out");
  ("The word the third name did not get is the whole question. Both words are on the screen and only one of them was copied, so a learner who reads the third line as decoration rather than as a name has a word to reach for, and it is wrong.");
  ("Four words are picked, each program holds one of them and the next one along, and every word is written out by exactly one program. So the word a program leaves behind is another program's answer, and the three wrong answers a question offers are the other three questions' answers - nothing has to be invented to fill the buttons.");
  ("Which of the two names is copied swaps every other program. Left always the second, a learner would find the answer by taking the last word above the copying line and never read the name on it at all, which is the reading this lesson exists to end.");
  ("The value on the copying line is a name with no quote marks round it, and that is the only new thing here. Every other line on the screen is a line a learner has already been reading.");
  ("The words are the fruits of the Spirit as the string lessons have them; no word here is used as a name.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_copy = app_code_lesson_statement_name_copy_name();
  equal_not_assert_json(name_copy, name_first, {
    hint: "the name that gets filled from another cup is spelled the same as the first cup, so the copying line would be giving a name what is already inside it",
  });
  equal_not_assert_json(name_copy, name_last, {
    hint: "the name that gets filled from another cup is spelled the same as the second cup, so the copying line would be giving a name what is already inside it",
  });
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    "the four lines that give two words two names, fill a third name from one of them, and write out what the third one holds";
    let next = add(index, 1);
    let other = list_get_wrap(picked, next);
    let even = integer_even_is(index);
    let name_copied = ternary(even, name_last, name_first);
    let first_word = ternary(even, other, word);
    let last_word = ternary(even, word, other);
    let quoted_first = app_code_string_code(first_word);
    let held_first = js_code_let_statement(name_first, quoted_first);
    let quoted_last = app_code_string_code(last_word);
    let held_last = js_code_let_statement(name_last, quoted_last);
    let copied = js_code_let_statement(name_copy, name_copied);
    let logged = js_code_console_log_statement(name_copy);
    let lines = [held_first, held_last, copied, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
