import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function app_reply_languages_codes_text(languages_chosen) {
  "The chosen languages as the line the message ends with - their codes joined by commas, in the order they were chosen, matching the order their verses were read in.";
  arguments_assert(arguments, 1);
  let copy = list_copy(languages_chosen);
  let property_name = language_code_key();
  let mapped = list_map_property(copy, property_name);
  let result = list_join_comma(mapped);
  return result;
}
