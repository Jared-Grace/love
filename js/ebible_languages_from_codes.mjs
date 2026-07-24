import { ebible_languages } from "./ebible_languages.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map } from "./list_map.mjs";
export function ebible_languages_from_codes(codes) {
  "a code that names no language is dropped, so an old link with a retired code still opens";
  let languages = ebible_languages();
  function to_language(code) {
    let found = list_find_property_or_null(languages, "language_code", code);
    return found;
  }
  let mapped = list_map(codes, to_language);
  let chosen = list_filter_null_not_is(mapped);
  return chosen;
}
