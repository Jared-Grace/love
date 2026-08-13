import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_button_back_to_text(destination) {
  "What a way out says when it can name where it leads - the plain back label with the destination on the end of it, so a reader can see what pressing it will hand them before they press it.";
  "It is built on the plain label rather than beside it. The arrow and the word are one decision, and spelled twice they are two things that have to agree about which arrow and which word, with nothing anywhere to say they had stopped agreeing.";
  arguments_assert(arguments, 1);
  let back = app_shared_button_back_text();
  let text = text_combine_multiple([back, " to ", destination]);
  return text;
}
