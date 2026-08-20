import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { add } from "./add.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_copy_kept_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives a name a word, gives a second name what the first one holds, puts a different word under the first name, and writes the second one out");
  ("The word put in second is the whole question. It is the last word written above the line that asks, so a learner who reads the program as a list of words rather than as things happening in order reaches for it - and it is wrong, because the second name was filled before that line was reached.");
  ("Four words are picked, each program starts with one of them and is given the next one along, and every word is written out by exactly one program. So no two programs of a batch have the same answer, and the word a program puts in second is a word some other program is answered with - which is what makes it a word worth offering as a wrong answer.");
  ("Whether it is offered is not settled here, but it is settled. A question's wrong answers are drawn from batches of their own, so left to the draw the word this program put in second was among them about half the time; the lesson asks for the words written in the program by name instead, which puts it on the buttons every time. What is settled here is only that it is never the right one.");
  ("Two names and not three. The screen before the one that taught the copying had two cups on it for a reason of its own; here a third cup would be a cup nothing reads, and every word on the screen has to be one a learner might answer with.");
  ("The words are the fruits of the Spirit as the string lessons have them; no word here is used as a name.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_third();
  equal_not_assert_json(name_copy, name_first, {
    hint: "the name filled from the other cup is spelled the same as the cup it is filled from, so the changing line would be changing the answer as well",
  });
  let words = fruits_of_the_spirit();
  let picked = list_shuffle_take(words, 4);
  function program_of(word, index) {
    "the four lines that fill a name, copy it into a second name, put another word under the first name, and write out what the second one holds";
    let next = add(index, 1);
    let other = list_get_wrap(picked, next);
    equal_not_assert_json(other, word, {
      hint: "a program on this screen would put the same word under the name twice, so the answer would be right whether or not the order of the lines was read",
    });
    let quoted = app_code_string_code(word);
    let held = js_code_let_statement(name_first, quoted);
    let copied = js_code_let_statement(name_copy, name_first);
    let quoted_other = app_code_string_code(other);
    let changed = js_code_assign_statement(name_first, quoted_other);
    let logged = js_code_console_log_statement(name_copy);
    let lines = [held, copied, changed, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map_index(picked, program_of);
  return codes;
}
