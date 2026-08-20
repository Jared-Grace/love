import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
export function app_code_lesson_expression_not_worked_card(root, inner, whole) {
  arguments_assert(arguments, 3);
  ("the card under a ! lesson that carries one line all the way to its value: what is done first, what that comes to and what the whole line then reads as, and what that in turn comes to.");
  ("The two lessons that put a ! around something both end on this card and both wrote it out in full. What differs between them is only what stands inside the brackets - a comparison in one, a joined pair in the other - so the inside is handed in and the three lines around it are said once.");
  ("It works for both because both lessons chose a line whose inside comes to false. That is not a coincidence to be tidied away: a line agreeing with the part inside it would show the ! doing nothing, so a lesson teaching the ! picks an inside that comes to false, and this card is written for exactly that.");
  ("Every piece is built from the marks rather than typed out, so the card cannot quietly say something the app would not print.");
  let false_word = js_keyword_false();
  let true_word = js_keyword_true();
  let not_false = js_code_not(false_word);
  let worked = app_code_container_light_blue(root);
  html_div_cycle_code(worked, ["For ", whole, ", we do ", inner, " first"]);
  html_div_cycle_code(worked, [
    "",
    inner,
    " is ",
    false_word,
    ", so ",
    whole,
    " is ",
    not_false,
  ]);
  html_div_cycle_code(worked, [
    "",
    not_false,
    " is ",
    true_word,
    ", so ",
    whole,
    " is ",
    true_word,
  ]);
}
