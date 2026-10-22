import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_questions_hash_key } from "./app_code_questions_hash_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_code_hash_field_questions() {
  arguments_assert(arguments, 0);
  ("The how-many-questions field of a code app link, described in the shape the checking of links reads: a count, like the place in the quiz.");
  let field = {
    key: app_code_questions_hash_key(),
    name: "most questions",
    list_is: false,
    number_is: true,
    valid_is: text_digits_is,
    suggestions: hash_number_suggestions,
    label: hash_number_label,
  };
  return field;
}
