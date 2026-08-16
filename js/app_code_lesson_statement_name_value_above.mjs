import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_grape } from "./emoji_grape.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_first } from "./list_first.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_code_lesson_statement_name_value_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: a cup with a grape in it, the word for such a cup, and the same thing written as code");
  ("The story comes first and the code second, because a name holding a value is not something a learner can be shown by more code - every line up to here has been read left to right and come out as a value, and this one puts a value somewhere and leaves it. A cup is the everyday thing that already behaves that way, so the code is met as a second way of saying something already understood.");
  ("The picture is drawn three times over, empty, then named, then filled, because the story is a change and one picture cannot be a change.");
  ("The grape is a real fruit rather than one of the words the string lessons use, because it has to be something that can be inside a cup. What the quizzes hold are those same words as before, which is the point: the value in the cup can be any of them.");
  let names = app_code_lesson_statement_name_value_names();
  let name = list_first(names);
  let word = app_code_lesson_statement_name_value_word();
  let grape = emoji_grape();
  let nothing = text_empty();
  let box_cup = app_code_container_light_blue(root);
  html_div_cycle_code(box_cup, ["Suppose you had a cup"]);
  app_code_cup(box_cup, nothing, nothing);
  html_div_cycle_code(box_cup, ["Suppose you called the cup ", name]);
  app_code_cup(box_cup, nothing, name);
  html_div_cycle_code(box_cup, ["Then suppose you put some grapes in the cup"]);
  app_code_cup(box_cup, grape, name);
  html_div_cycle_code(box_cup, [
    "Now if someone asked you what is inside the cup called ",
    name,
  ]);
  html_div_cycle_code(box_cup, ["You could answer grapes"]);
  ("the word is bolded here and nowhere else, because this is the one place it is being given a meaning rather than used");
  let box_word = app_code_container_light_blue(root);
  html_div_cycle_bold(box_word, [
    "In computers, cups like this are called ",
    "variables",
  ]);
  html_div_cycle_code(box_word, ["A variable has a name, and holds one value"]);
  ("the code box says the same three things the story said, in the same order: the cup is made and filled, then it is asked what is inside it, then the answer comes out");
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
}
