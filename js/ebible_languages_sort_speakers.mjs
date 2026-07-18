import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { ebible_language_speakers_millions } from "./ebible_language_speakers_millions.mjs";
import { ebible_language_original_code } from "./ebible_language_original_code.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
export function ebible_languages_sort_speakers(languages) {
  let speakers = ebible_language_speakers_millions();
  let original_code = ebible_language_original_code();
  function sort_weight(language) {
    let code = property_get(language, "language_code");
    let original = equal(code, original_code);
    if (original) {
      ("the source text sorts before every spoken language");
      return -Infinity;
    }
    let millions = property_get_or(speakers, code, 0);
    ("more speakers sorts earlier, so a larger count is a smaller weight");
    return -millions;
  }
  list_sort_number_mapper(languages, sort_weight);
}
