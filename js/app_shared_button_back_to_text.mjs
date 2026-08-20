import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_button_back_to_text(destination) {
  "What a way out says when it can name where it leads - the plain back label with the destination on the end of it, so a reader can see what pressing it will hand them before they press it.";
  "It is built on the plain label rather than beside it. The arrow and the word are one decision, and spelled twice they are two things that have to agree about which arrow and which word, with nothing anywhere to say they had stopped agreeing.";
  "Each language gets what stands before the destination and what stands after it, rather than one joining word between them. English puts the word for towards in front of the place; Urdu puts it behind, so a single connector dropped in the middle would put the Urdu word in the one position it cannot occupy, and the sentence would come out backwards while every word in it was right.";
  "An empty half is a real answer here and not a missing one. English wants nothing after the place, Urdu wants nothing before it, and either language having both halves filled would be the odd case rather than the normal one.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: " to ",
      after: "",
    },
    ur: {
      before: " ",
      after: " پر واپس",
    },
  };
  let part = app_shared_text_reader_language(parts);
  let before = property_get(part, "before");
  let after = property_get(part, "after");
  let back = app_shared_button_back_text();
  let text = text_combine_multiple([back, before, destination, after]);
  return text;
}
