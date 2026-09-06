import { app_code_review_hash_key } from "./app_code_review_hash_key.mjs";
import { app_code_review_number_known_is } from "./app_code_review_number_known_is.mjs";
import { app_code_review_number_suggestions } from "./app_code_review_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_code_hash_field_review() {
  "The review field of a code app link, described in the shape the checking of links reads.";
  "It holds a count like the place in the quiz does, and unlike that one it is a count out of a written-down set - only every fifth lesson has a review under it - so a wrong number here is answerable rather than merely mis-shaped.";
  let field = {
    key: app_code_review_hash_key(),
    name: "review",
    list_is: false,
    number_is: true,
    valid_is: app_code_review_number_known_is,
    suggestions: app_code_review_number_suggestions,
    label: hash_number_label,
  };
  return field;
}
