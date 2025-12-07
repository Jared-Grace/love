import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { string_pad_space } from "../../../love/public/src/string_pad_space.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function g_themes(text) {
  let split = string_split_empty(text);
  function lambda2(item) {
    let li = string_letters_is(item);
    if (not(li)) {
      item = string_pad_space(item);
    }
    return item;
  }
  let mapped2 = list_map(split, lambda2);
  let joined = list_join_empty(mapped2);
  let themes = {
    evil: "morality",
    good: "morality",
  };
  function lambda3(value, property) {}
  each_object(object, lambda3);
  function lambda(w) {
    let theme = object_property_get_or(themes, w, null);
    return theme;
  }
  let mapped = list_map(words_correct, lambda);
  let themes_correct = list_filter(mapped, null_not_is);
  themes_correct = list_unique(themes_correct);
  return themes_correct;
}
