import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_add } from "./list_add.mjs";
import { reply_countries_shown_spellings } from "./reply_countries_shown_spellings.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
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
  let spelled = reply_countries_shown_spellings();
  let has_spellings = property_exists(spelled, shown);
  if (has_spellings) {
    let others = property_get(spelled, shown);
    list_add_multiple(matched_words, others);
  }
  return matched_words;
}
