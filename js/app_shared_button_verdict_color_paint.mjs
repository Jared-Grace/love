import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_code_surfaces_inside } from "./app_shared_code_surfaces_inside.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_code_surfaces_color_paint } from "./app_shared_code_surfaces_color_paint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_shared_button_verdict_color_paint(
  component,
  color,
  color_code,
) {
  "$plain color";
  "$plain color_code";
  "colour a button with the verdict on it - the run of code inside it when it holds one, the button itself when it does not - and say which of the two it did";
  "Right and wrong are the same problem in two colours, so they are one function in two colours. Both had to know that a button holding code is invisible by the time it is pressed and that painting it would put a frame back around the code at the very moment the learner is looking hardest; either one knowing that alone is the one that goes wrong later.";
  "It says which way it went because the caller has more to do afterwards and what is left to do differs. Words on the button need turning white; words already inside a code block are white. An edge drawn around the button belongs to the button. None of that is this function's business, and a caller that cannot tell what happened would have to guess at it.";
  arguments_assert(arguments, 3);
  ("the two colours are asked for separately because the same colour is not right on both. A button is a small shape carrying a few words and a colour on it reads as a label put on that shape; a code block fills its line and stands as tall as the code in it, and a colour spread that wide has to be quieter to say the same thing. A caller for which one colour really does suit both hands the same one in twice, which says so plainly.");
  let surfaces = app_shared_code_surfaces_inside(component);
  let coded = list_empty_not_is(surfaces);
  if (coded) {
    app_shared_code_surfaces_color_paint(surfaces, color_code);
    return coded;
  }
  html_style_background_color_set(component, color);
  return coded;
}
