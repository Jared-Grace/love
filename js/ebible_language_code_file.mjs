import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function ebible_language_code_file(code) {
  "The code a language's files online are named by - which, for a language whose code was renamed to ISO 639-3, is still the code it had when the files were uploaded.";
  "Kept rather than uploaded again because one language's search alone is a file per word, and because a copy of an app already open in someone's browser goes on asking for the old name. Nobody reads a file name, so the old spelling costs nothing there; everywhere a person sees or types a code, the new one is used.";
  arguments_assert(arguments, 1);
  let renamed = ebible_language_codes_iso_639_3_renamed();
  for (let before of object_property_names(renamed)) {
    let after = property_get(renamed, before);
    if (equal(after, code)) {
      return before;
    }
  }
  return code;
}
