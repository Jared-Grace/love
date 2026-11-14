import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_button_verdict_color_paint } from "./app_shared_button_verdict_color_paint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  "paint a button as the right answer: green behind and white words - or, when the answer is written as code, the run of code and the button behind it both turned green";
  "Which of the two it is decides itself from what is in the button, so no caller has to remember. A caller knows what it put in there; it does not know that green is about to be painted around it, and that is exactly the pair of facts that has to meet in one place.";
  arguments_assert(arguments, 1);
  let green = app_shared_button_background();
  ("handed in twice on purpose: this one green was tried on both a button and a block of code and it reads right on either, so there is nothing here to tell apart");
  let coded = app_shared_button_verdict_color_paint(component, green, green);
  if (coded) {
    ("the lettering inside a code block is already white");
    ("2026-11-14, at the human's asking: the button behind the code turns green too, so a right code answer shows as the whole choice, the same way a wrong one turns wholly red. Not picked: green on the code alone, which was the rule before, because the button was taken to be out of sight and its frame a distraction; the human wanted right and wrong to look alike.");
    html_style_background_color_set(component, green);
    return;
  }
  let color = app_shared_button_font_color();
  html_font_color_set(component, color);
}
