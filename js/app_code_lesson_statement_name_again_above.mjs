import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
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
  html_div_cycle_code(box_code, ["In JS we make the cup like this:"]);
  html_div_code(box_code, held);
  ("THE CUP rather than IT. The line before it is about the cup and the line after it is about a word, so an it standing between them has two things it could be pointing at and the learner has to pick. Naming the cup costs one word and leaves nothing to pick.");
  html_div_cycle_code(box_code, [
    "We do not make the cup again, so we do not write ",
    "let",
    " a second time:",
  ]);
  html_div_code(box_code, again);
  html_div_cycle_code(box_code, ["Then we write out what is in the cup:"]);
  app_code_code_lines_writes_out(box_code, [logged], word_after);
  ("The last box says the order rule in the words the course already owns. A statement, and the ; that ends one, were taught long before this lesson - so the rule is stated about statements rather than about LINES, which is a word about how the program is laid out on the screen and not about the language. Two statements on one line would still happen in the order they were written, and a learner told the rule in terms of lines has been given something that is nearly true.");
  ("The recall comes first, because the sentence under it leans on it. A learner who has to remember what a statement is while reading a rule about statements is doing two things at once, and the first of them is free to give them.");
  ("Then the rule is spent on the very cup in front of them rather than left general. WHAT COMES OUT IS WHATEVER WENT IN LAST is true and says nothing about this screen; naming the cup, and saying out loud that its value was set twice here, is the same rule with the working shown - and this screen is the one place a learner can check it against a picture.");
  let semicolon = js_code_semicolon();
  let box_care = app_code_container_light_blue(root);
  html_div_cycle_code(box_care, [
    "Remember, a statement ends with ",
    semicolon,
  ]);
  html_div_cycle_code(box_care, [
    "In JS, the ",
    semicolon,
    " statements happen in the order they are written",
  ]);
  html_div_cycle_code(box_care, [
    "So when we set the value of ",
    name,
    ", then whichever value was set last is the value that ",
    name,
    " will have",
  ]);
  html_div_cycle_code(box_care, [
    "Here we set the value of ",
    name,
    " twice, so the second value of ",
    name,
    " is used, not the first",
  ]);
}
