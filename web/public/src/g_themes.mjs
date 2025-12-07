import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function g_themes(text) {
  let li = string_letters_is(str);
  let themes = {
    evil: "morality",
    good: "morality",
  };
  function lambda(w) {
    let theme = object_property_get_or(themes, w, null);
    return theme;
  }
  let mapped = list_map(words_correct, lambda);
  let themes_correct = list_filter(mapped, null_not_is);
  themes_correct = list_unique(themes_correct);
  return themes_correct;
}
