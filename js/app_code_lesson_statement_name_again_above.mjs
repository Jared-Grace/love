import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_again_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: one cup, what was in it, what is in it now, and the line that changed it");
  ("The same cup twice over rather than two cups side by side. The lesson before put two cups next to each other and asked which one was meant; this one has to say the opposite - there is only ever one cup here, and it is the SAME cup in both pictures. Drawn side by side they would read as two, which is the answer to the wrong lesson.");
  ("The two pictures are the two lines. Everything a learner has to work out is that the second picture happened after the first, so the pictures are shown in the order the lines are written and the words between them say which came first.");
  ("What was in the cup is said to be gone, in as many words. A cup can hold more than one thing in life, and nothing on the screen rules that out; the code does, and it is the one thing a picture of a cup cannot say by itself.");
  let name = app_code_lesson_statement_name_value_name();
  let word_before = app_code_lesson_statement_name_value_word();
  let word_after = app_code_lesson_statement_name_two_word();
  let box_before = app_code_container_light_blue(root);
  let has = list_join_empty([" has ", word_before, " in it"]);
  html_div_cycle_code(box_before, ["Remember, the cup called ", name, has]);
  app_code_lesson_cup_fruit(box_before, word_before, name);
  let box_after = app_code_container_light_blue(root);
  let swap = list_join_empty([
    "Now take the ",
    word_before,
    " out and put ",
    word_after,
    " in",
  ]);
  html_div_cycle_code(box_after, [swap]);
  app_code_lesson_cup_fruit(box_after, word_after, name);
  html_div_cycle_code(box_after, ["It is the same cup, still called ", name]);
  ("the line begins with a however, because the line above it has just said that nothing about the cup changed - same cup, same name - and this one says the one thing that did. Without the however the two lines read as two more facts about a cup, and the second is the whole lesson.");
  let gone = list_join_empty([
    "However, the ",
    word_before,
    " are not in it any more",
  ]);
  html_div_cycle_code(box_after, [gone]);
  ("the code box says the no-let part before the second line rather than after it, because a learner reading the line first will read the missing word as a mistake");
  let box_code = app_code_container_light_blue(root);
  let quoted_before = app_code_string_code(word_before);
  let quoted_after = app_code_string_code(word_after);
  let held = js_code_let_statement(name, quoted_before);
  let again = js_code_assign_statement(name, quoted_after);
  let logged = js_code_console_log_statement(name);
  html_div_cycle_code(box_code, ["In JS we make the cup like this"]);
  html_div_code(box_code, held);
  html_div_cycle_code(box_code, [
    "We do not make it again, so we do not write ",
    "let",
    " a second time",
  ]);
  html_div_code(box_code, again);
  html_div_cycle_code(box_code, ["Then we write out what is in the cup"]);
  html_div_code(box_code, logged);
  app_code_writes_out_line(box_code, word_after);
  let box_care = app_code_container_light_blue(root);
  html_div_cycle_code(box_care, [
    "The lines happen in the order they are written",
  ]);
  html_div_cycle_code(box_care, ["So what comes out is whatever went in last"]);
}
