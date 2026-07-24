import { ebible_language_original_code } from "./ebible_language_original_code.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_insert } from "./list_insert.mjs";
export function ebible_languages_original_first(languages) {
  "the source text belongs above the spoken languages even under an A-to-Z sort, matching the by-speakers sort that already lifts it to the top; a list without the original (a versions list) is left untouched";
  let code = ebible_language_original_code();
  let original = list_find_property_or_null(languages, "language_code", code);
  if (null_is(original)) {
    return;
  }
  list_remove(languages, original);
  list_insert(languages, 0, original);
}
