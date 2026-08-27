import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_code_surfaces_inside } from "./app_shared_code_surfaces_inside.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_code_surfaces_color_paint } from "./app_shared_code_surfaces_color_paint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_shared_button_verdict_color_paint(component, color) {
  "$plain color";
  "colour a button with the verdict on it - the run of code inside it when it holds one, the button itself when it does not - and say which of the two it did";
  "Right and wrong are the same problem in two colours, so they are one function in two colours. Both had to know that a button holding code is invisible by the time it is pressed and that painting it would put a frame back around the code at the very moment the learner is looking hardest; either one knowing that alone is the one that goes wrong later.";
  "It says which way it went because the caller has more to do afterwards and what is left to do differs. Words on the button need turning white; words already inside a code block are white. An edge drawn around the button belongs to the button. None of that is this function's business, and a caller that cannot tell what happened would have to guess at it.";
  arguments_assert(arguments, 2);
  let surfaces = app_shared_code_surfaces_inside(component);
  let coded = list_empty_not_is(surfaces);
  if (coded) {
    app_shared_code_surfaces_color_paint(surfaces, color);
    return coded;
  }
  html_style_background_color_set(component, color);
  return coded;
}
