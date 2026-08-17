import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_lesson_statement_name_identifier_name } from "./app_code_lesson_statement_name_identifier_name.mjs";
import { app_code_lesson_statement_name_identifier_word } from "./app_code_lesson_statement_name_identifier_word.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_value_line } from "./app_code_value_line.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_grape } from "./emoji_grape.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_identifier_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the cup as it was left, the same cup called something else, the one new fact, and the same thing written as code");
  ("The cup is drawn again rather than described, because what is being changed is the writing on its side and nothing else. Two pictures of one cup with two different words on it say that in a way no sentence about names says as quickly.");
  ("What is in the cup does not change from one picture to the next, and is said out loud not to have changed. That is the whole lesson: the name is a label somebody chose, and the value is not affected by which label was chosen.");
  ("The last box says what comes out is what is in the cup and not the word on it, because that is the mistake the questions are built to catch - every screen offers the program's own name as one of the wrong answers - and a question set to catch a mistake ought to have warned about it first.");
  let name_before = app_code_lesson_statement_name_value_name();
  let name = app_code_lesson_statement_name_identifier_name();
  let word = app_code_lesson_statement_name_identifier_word();
  let grapes = app_code_lesson_statement_name_value_word();
  let grape = emoji_grape();
  let box_before = app_code_container_light_blue(root);
  html_div_cycle_code(box_before, [
    "Remember, a variable has a name, and holds one value",
  ]);
  html_div_cycle_code(box_before, [
    "So far every cup has been called ",
    name_before,
  ]);
  app_code_cup(box_before, grape, name_before);
  ("the second picture is the first one with a different word written on it, and the line under it says the one thing a learner has to carry away - that nothing else about the cup moved");
  let box_any = app_code_container_light_blue(root);
  html_div_cycle_code(box_any, ["But you can call a cup whatever you like"]);
  html_div_cycle_code(box_any, ["Suppose you called this one ", name]);
  app_code_cup(box_any, grape, name);
  html_div_cycle_code(box_any, ["What is in the cup did not change"]);
  app_code_value_line(box_any, "Inside the cup: ", grapes);
  let box_id = app_code_container_light_blue(root);
  html_div_cycle_code(box_id, ["A name can be any identifier"]);
  html_div_cycle_code(box_id, [
    "The word ",
    name,
    " is an identifier, so it can be a name",
  ]);
  ("the code box gives a cup a word for a name and a word for a value, so the two are the same kind of thing on the page and only where they stand tells them apart - which is exactly the reading the questions ask for");
  let quoted = app_code_string_code(word);
  let held = js_code_let_statement(name, quoted);
  let logged = js_code_console_log_statement(name);
  let box_code = app_code_container_light_blue(root);
  html_div_cycle_code(box_code, [
    "In JS we make a cup called ",
    name,
    " and put ",
    quoted,
    " in it like this",
  ]);
  html_div_code(box_code, held);
  html_div_cycle_code(box_code, [
    "Then we can write out whatever is inside the cup like this",
  ]);
  html_div_code(box_code, logged);
  app_code_writes_out_line(box_code, word);
  let box_care = app_code_container_light_blue(root);
  html_div_cycle_code(box_care, [
    "What comes out is what is inside the cup, not the name on it",
  ]);
}
