import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_add } from "./list_add.mjs";
export function reply_country_shown_words(shown) {
  "The run of letters a message must hold for a country written this way, the same shape the country lists keep. A name that takes the word the is read with it and without it, because people write both.";
  let lower = text_lower_to(shown);
  let joined = text_letters_only(lower);
  let matched_words = [joined];
  let the = "the ";
  let starts = text_starts_with(lower, the);
  if (starts) {
    let without = text_prefix_without(lower, the);
    let letters = text_letters_only(without);
    list_add(matched_words, letters);
  }
  return matched_words;
}
