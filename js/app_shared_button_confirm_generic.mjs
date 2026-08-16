import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_button_confirm_generic(
  parent,
  text,
  question,
  text_confirm,
  on_confirm,
  button_confirm,
) {
  "One button for an action a learner cannot take back: pressing it asks the question instead of doing the thing, and only the button under the question does it. Shared, so every app asks in the same shape and nobody has to invent the wording of a second chance.";
  "The question replaces the button in the same spot rather than opening over it, so nothing else on the screen moves and the answer is read where the press was.";
  "Backing out returns to the plain button, and so does confirming - whatever the action left behind, this much of the screen is offering it again.";
  "Which button carries the yes is handed in, because green reads as go ahead and a press that throws away what a learner has done should not be wearing it.";
  arguments_assert(arguments, 6);
  let div = html_div(parent);
  function offer() {
    html_clear(div);
    app_shared_button(div, text, ask);
  }
  function ask() {
    html_clear(div);
    app_shared_text_body(div, question);
    async function on_yes() {
      await on_confirm();
      offer();
    }
    button_confirm(div, text_confirm, on_yes);
    let text_back = app_shared_button_back_text();
    app_shared_button(div, text_back, offer);
  }
  offer();
  return div;
}
