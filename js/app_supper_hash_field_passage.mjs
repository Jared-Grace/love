import { app_supper_passage_hash_key } from "./app_supper_passage_hash_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_supper_hash_field_passage() {
  "The which-passage field of a supper link, described in the shape the checking of links reads.";
  "It holds a count rather than a word out of a written-down set, so what is checked here is the shape of a count and nothing else. Whether that count is one this supper actually reaches is a different question with a different answer - it depends on the passages, which are not loaded yet - so it is left to the page, and only a link that could not be a number at all is answered here.";
  let field = {
    key: app_supper_passage_hash_key(),
    name: "passage",
    list_is: false,
    valid_is: text_digits_is,
    suggestions: hash_number_suggestions,
    label: hash_number_label,
  };
  return field;
}
