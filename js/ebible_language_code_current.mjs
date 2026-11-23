import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { ebible_language_codes_iso_639_1 } from "./ebible_language_codes_iso_639_1.mjs";
export function ebible_language_code_current(code) {
  "The code a language is offered under now, for a code that came from outside the running app - a link someone shared, or a choice a reader's browser saved - which may spell a language the way these apps did before they settled on ISO 639-3.";
  "A code offered now comes back as it is. One renamed since comes back as the code it was renamed to, but only when that code is offered, so this changes nothing before the rename lands and nothing after it for a code that is already current. Anything else comes back untouched, so whatever already tells a reader a code is unknown still gets to.";
  arguments_assert(arguments, 1);
  let known = ebible_language_codes();
  if (list_includes(known, code)) {
    return code;
  }
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let after = property_get_or(renamed, code, code);
  if (list_includes(known, after)) {
    return after;
  }
  ("A two-letter ISO 639-1 code - the one most people know, like es - comes back as the language it names, but only when exactly one offered language answers to it, so a code that could mean several is never guessed at.");
  let two_letter = ebible_language_codes_iso_639_1();
  let named = property_get_or(two_letter, code, code);
  if (list_includes(known, named)) {
    return named;
  }
  return code;
}
