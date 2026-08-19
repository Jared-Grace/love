import { app_code_code_output_explain_box } from "./app_code_code_output_explain_box.mjs";
import { app_code_lesson_cup_code_box } from "./app_code_lesson_cup_code_box.mjs";
import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_value_line } from "./app_code_value_line.mjs";
import { html_div_cycle_bold } from "./html_div_cycle_bold.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_code_lesson_statement_name_value_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: what a learner has already been told about names, a cup with grapes in it, the word for such a cup, and the same thing written as code");
  ("The story comes first and the code second, because a name holding a value is not something a learner can be shown by more code - every line up to here has been read left to right and come out as a value, and this one puts a value somewhere and leaves it. A cup is the everyday thing that already behaves that way, so the code is met as a second way of saying something already understood.");
  ("The picture is drawn three times over, empty, then named, then filled, because the story is a change and one picture cannot be a change.");
  ("The grapes are a real fruit rather than one of the words the string lessons use, because what goes in the cup has to be something that can be inside a cup. What the quizzes hold are those same words as before, which is the point: the value in the cup can be any of them.");
  let name = app_code_lesson_statement_name_value_name();
  let word = app_code_lesson_statement_name_value_word();
  let nothing = text_empty();
  ("a reminder rather than a new fact: the identifier lessons already said identifiers are used as names, and this is the first screen where one actually names something. Saying it again here is what joins the two, and it costs nothing to read because a learner has met every word of it.");
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [
    "Remember, in JS, identifiers are used as names",
  ]);
  let box_cup = app_code_container_light_blue(root);
  html_div_cycle_code(box_cup, ["Suppose you had a cup"]);
  app_code_cup(box_cup, nothing, nothing);
  html_div_cycle_code(box_cup, ["Suppose you called the cup ", name]);
  app_code_cup(box_cup, nothing, name);
  html_div_cycle_code(box_cup, [
    "Then suppose you put some ",
    word,
    " in the cup",
  ]);
  app_code_lesson_cup_fruit(box_cup, word, name);
  html_div_cycle_code(box_cup, [
    "Now if someone asked you what is inside the cup called ",
    name,
  ]);
  ("the answer is dressed the way a value that comes out is dressed, because that is what it is - the very thing the code at the bottom of the screen writes out, said first in a story where nobody has to read any code to know it");
  app_code_value_line(box_cup, "You could answer: ", word);
  ("the word is bolded here and nowhere else, because this is the one place it is being given a meaning rather than used");
  let box_word = app_code_container_light_blue(root);
  html_div_cycle_bold(box_word, [
    "In computers, cups like this are called ",
    "variables",
  ]);
  html_div_cycle_code(box_word, ["A variable has a name, and holds one value"]);
  app_code_lesson_cup_code_box(root, name, word);
  ("this is the first screen in the whole app where code and its output are drawn above the questions, so it is the one screen that says what that card is; the screens after it are read by a learner who has been told");
  app_code_code_output_explain_box(root);
}
