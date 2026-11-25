import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
export function app_shared_confirm_choices({
  parent,
  question,
  button_confirm,
  text_confirm,
  on_confirm,
  button_back,
  text_back,
  on_back,
}) {
  "what every asking before something that cannot be taken back draws, wherever it is drawn - a screen of its own or a box over the page: the question, the button that does it, and the way out";
  arguments_assert(arguments, 1);
  ("the way out is drawn the same size as the yes, because the two of them are the only choices on the screen and a narrower one reads as the lesser of them - which is backwards, since the way out is the safe answer");
  ('Each caller dresses and words its own way out: a screen says Back; a box asking whether to cancel a meeting must not, since there a button saying "Cancel" reads as the yes (human, 2026-11-24: "back button should say cancel? what do you think?").');
  app_shared_text_body(parent, question);
  button_confirm(parent, text_confirm, on_confirm);
  button_back(parent, text_back, on_back);
}
