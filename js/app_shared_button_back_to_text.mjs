import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_back_arrow } from "./app_shared_button_back_arrow.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_button_back_to_text(destination) {
  "What a way out says when it can name where it leads, in the language the reader of this app reads - so a reader can see what pressing it will hand them before they press it.";
  "Each language gets what stands before the place and what stands after it, rather than the plain label with a joining word dropped on the end. English says back to and then the place; Urdu says the place and then the words that mean back to it. A connector fixed in the middle would put the Urdu words in the one position they cannot occupy, and the sentence would come out backwards while every word in it was right.";
  "An empty half is a real answer here and not a missing one. English wants nothing after the place and Urdu wants nothing before it, so a language filling both halves would be the odd case rather than the normal one.";
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
  let part = app_shared_text_reader_language(parts);
  let before = property_get(part, "before");
  let after = property_get(part, "after");
  let arrow = app_shared_button_back_arrow();
  let text = text_combine_multiple([arrow, before, destination, after]);
  return text;
}
