import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_key } from "./app_code_hash_complete_key.mjs";
import { app_code_hash_complete_known_is } from "./app_code_hash_complete_known_is.mjs";
import { app_code_hash_complete_suggestions } from "./app_code_hash_complete_suggestions.mjs";
import { identity } from "./identity.mjs";
export function app_code_hash_field_complete() {
  arguments_assert(arguments, 0);
  ("The complete field of a code app link, described in the shape the checking of links reads.");
  let field = {
    key: app_code_hash_complete_key(),
    name: "complete",
    list_is: false,
    number_is: false,
    valid_is: app_code_hash_complete_known_is,
    suggestions: app_code_hash_complete_suggestions,
    label: identity,
  };
  return field;
}
