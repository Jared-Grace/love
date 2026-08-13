import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { app_code_quiz_index_known_is } from "./app_code_quiz_index_known_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { app_code_quiz_index_label } from "./app_code_quiz_index_label.mjs";
export function app_code_hash_field_quiz() {
  "The place-in-the-quiz field of a code app link, described in the shape the checking of links reads.";
  "The first field described here that names nothing - it holds a count, not a word out of a written-down set - and it is described anyway, because the shape of a count is still something a link can get wrong. What it is not is a range: how far into a quiz you can be is the lesson's business, and this is answered before any lesson is loaded.";
  let field = {
    key: app_code_quiz_hash_key(),
    name: "place in the quiz",
    list_is: false,
    valid_is: app_code_quiz_index_known_is,
    suggestions: hash_number_suggestions,
    label: app_code_quiz_index_label,
  };
  return field;
}
