import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_cups_row_fruits } from "./app_code_lesson_cups_row_fruits.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_name_no_quotes_box } from "./app_code_lesson_name_no_quotes_box.mjs";
import { app_code_lesson_statement_name_copy_name } from "./app_code_lesson_statement_name_copy_name.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_copy_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: two cups with different things in them, a third cup filled from one of the two, and the same thing written as code");
  ("The cups are drawn twice over, and the second row is the first row with a cup added to the end of it. Everything a learner has to see is what changed between the two pictures, so nothing that did not change is allowed to move.");
  ("Both of the first two cups still hold what they held. A cup filled from another cup is the one place a learner will expect something to have been poured out, and the picture answers that before the code raises it - the row says it, and the words under the row say it again for anyone who read the row as decoration.");
  ("The third cup is a new cup rather than one of the two, so the screen never has to say that a name was given something twice. That was the lesson before, it is settled, and putting it here would give a learner two reasons for a word to have moved.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_copy = app_code_lesson_statement_name_copy_name();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let box_have = app_code_container_light_blue(root);
  html_div_cycle_code(box_have, ["Remember, you can have more than one cup"]);
  app_code_lesson_cups_row_fruits(box_have, [
    [word_first, name_first],
    [word_last, name_last],
  ]);
  let box_new = app_code_container_light_blue(root);
  html_div_cycle_code(box_new, [
    "Now suppose you got another cup and called it ",
    name_copy,
  ]);
  html_div_cycle_code(box_new, [
    "And you put in it whatever is inside the cup called ",
    name_first,
  ]);
  app_code_lesson_cups_row_fruits(box_new, [
    [word_first, name_first],
    [word_last, name_last],
    [word_first, name_copy],
  ]);
  html_div_cycle_code(box_new, [
    "So both of them have ",
    word_first,
    " in them now",
  ]);
  html_div_cycle_code(box_new, [
    "Nothing came out of the cup called ",
    name_first,
  ]);
  let box_code = app_code_container_light_blue(root);
  let quoted_first = app_code_string_code(word_first);
  let held_first = js_code_let_statement(name_first, quoted_first);
  let quoted_last = app_code_string_code(word_last);
  let held_last = js_code_let_statement(name_last, quoted_last);
  let copied = js_code_let_statement(name_copy, name_first);
  let logged = js_code_console_log_statement(name_copy);
  html_div_cycle_code(box_code, ["In JS we make the two cups like this"]);
  html_div_code(box_code, held_first);
  html_div_code(box_code, held_last);
  html_div_cycle_code(box_code, [
    "Then we make ",
    name_copy,
    " and fill it from ",
    name_first,
  ]);
  html_div_code(box_code, copied);
  html_div_cycle_code(box_code, [
    "Then we write out what is inside ",
    name_copy,
  ]);
  html_div_code(box_code, logged);
  app_code_writes_out_line(box_code, word_first);
  app_code_lesson_name_no_quotes_box(root, name_first, name_copy);
}
