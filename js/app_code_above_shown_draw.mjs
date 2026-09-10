import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { noop } from "./noop.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_above_shown_get } from "./app_code_above_shown_get.mjs";
import { app_code_above_shown_button_text } from "./app_code_above_shown_button_text.mjs";
import { app_code_above_shown_toggle } from "./app_code_above_shown_toggle.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_above_shown_draw(root, above) {
  arguments_assert(arguments, 2);
  ("Draw a lesson's telling at the top of its front page if this learner has asked for one, with the button that asks for it standing over the place it appears.");
  ("THE EXERCISES ARE THE LESSON AND THE TELLING IS THE BACKUP. A learner who works the examples finds the pattern in them, and that is what the lesson is for; a learner who would rather be told can ask, and is not asked again next lesson because the answer is remembered. So the telling used to be printed for everybody and is now printed for whoever wants it.");
  ("THE BUTTON SITS ABOVE WHAT IT REVEALS, so pressing it moves nothing the learner was about to press. The telling grows underneath the button and pushes the examples down; the button itself stays exactly where the finger just left it.");
  ("A LESSON WITH NOTHING TO TELL GETS NO BUTTON. Such a lesson hands over the do-nothing painter, which is the repo's own way of saying it has nothing above, and offering to show a learner nothing is worse than not offering.");
  let nothing = equal(above, noop);
  if (nothing) {
    return null;
  }
  let holder = html_div(root);
  let slot = html_div(root);
  let shown = app_code_above_shown_get();
  if (shown) {
    above(slot);
  }
  let words = app_code_above_shown_button_text(shown);
  let button = null;
  function on_press() {
    let next = app_code_above_shown_toggle();
    html_clear(slot);
    if (next) {
      above(slot);
    }
    let said = app_code_above_shown_button_text(next);
    html_text_set(button, said);
  }
  button = app_shared_button_wide(holder, words, on_press);
  return button;
}
