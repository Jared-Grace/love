import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_back_arrow } from "./app_shared_button_back_arrow.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_back_to_text(destination) {
  "What a way out says when it can name where it leads, in the language the reader of this app reads - so a reader can see what pressing it will hand them before they press it.";
  "English says back to and then the place; Urdu says the place and then the words that mean back to it, so each language gets what stands before the place and what stands after it.";
  "The arrow is not written out per language, because it is the same arrow the plain way out wears and it already faces the way back for whoever is reading. Only the words differ between languages; which way an arrow points differs by which way the reader reads, and the two are asked separately.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: " Back to ",
      after: "",
    },
    ur: {
      before: " ",
      after: " پر واپس",
    },
  };
  let words = app_shared_text_reader_language_around(parts, destination);
  let arrow = app_shared_button_back_arrow();
  let text = text_combine(arrow, words);
  return text;
}
