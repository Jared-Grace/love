import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function ebible_languages_from_codes(codes) {
  "a code that names no language is dropped, so an old link with a retired code still opens";
  let languages = ebible_languages();
  function to_language(code) {
    let found = list_find_property_or_null(languages, "language_code", code);
    return found;
  }
  let chosen = list_map_filter_null_not_is(codes, to_language);
  return chosen;
}
