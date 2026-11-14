import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_step_hash_key } from "./app_learn_js_step_hash_key.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { hash_number_suggestions } from "./hash_number_suggestions.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
export function app_learn_js_hash_field_step() {
  arguments_assert(arguments, 0);
  ("The how-many-presses field of a code app link, described in the shape the checking of links reads: a count, like the place in the quiz.");
  let field = {
    key: app_learn_js_step_hash_key(),
    name: "right answers pressed for you",
    list_is: false,
    number_is: true,
    valid_is: text_digits_is,
    suggestions: hash_number_suggestions,
    label: hash_number_label,
  };
  return field;
}
