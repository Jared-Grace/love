import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_home_next_lesson_button } from "./app_code_home_next_lesson_button.mjs";
import { app_shared_button_wide_shape } from "./app_shared_button_wide_shape.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function app_code_home_start_button(parent, context) {
  arguments_assert(arguments, 2);
  ("the way in for a learner who has finished nothing yet: the same button the bar carries once they have started, drawn above the list instead - big, bold and as wide as the page, at the human's request");
  ("It can stand at the top of the list only because nothing has been started. The list comes back scrolled to the lesson a learner left, and a learner who has left none is looking at the top of it - so the reason the bar holds this button later does not hold yet.");
  let button = app_code_home_next_lesson_button(parent, context);
  app_shared_button_wide_shape(button);
  html_bold(button);
  html_style_font_size(button, "1.5em");
}
