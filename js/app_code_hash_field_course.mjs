import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_hash_key } from "./app_code_course_hash_key.mjs";
import { app_code_course_known_is } from "./app_code_course_known_is.mjs";
import { app_code_course_suggestions } from "./app_code_course_suggestions.mjs";
import { identity } from "./identity.mjs";
export function app_code_hash_field_course() {
  "The course field of a code app link, described in the shape the checking of links reads.";
  arguments_assert(arguments, 0);
  let field = {
    key: app_code_course_hash_key(),
    name: "course",
    list_is: false,
    number_is: false,
    valid_is: app_code_course_known_is,
    suggestions: app_code_course_suggestions,
    label: identity,
  };
  return field;
}
