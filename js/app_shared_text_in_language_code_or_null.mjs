import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { ebible_language_code_file } from "./ebible_language_code_file.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_shared_text_in_language_code_or_null(texts, language_code) {
  "One saying's words in a named language, or nothing when the saying is not written in it.";
  "A language whose code was renamed to ISO 639-3 may have its words kept under either spelling while the sayings are being moved over, so both are asked: the code as named, then the code it had before, then the code it was renamed to. A language never renamed has one spelling, so for it this asks the one question it always asked.";
  arguments_assert(arguments, 2);
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let code = ebible_language_code_file(language_code);
  let value = property_get_or(renamed, language_code, language_code);
  let spellings = [language_code, code, value];
  for (let spelling of spellings) {
    let text = property_get_or_null(texts, spelling);
    if (null_not_is(text)) {
      return text;
    }
  }
  return null;
}
