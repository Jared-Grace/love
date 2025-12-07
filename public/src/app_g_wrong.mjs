import { g_themes } from "../../../love/public/src/g_themes.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { integer_random_0 } from "../../../love/public/src/integer_random_0.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_wrong(passage, passages, property) {
  marker("1");
  let text = object_property_get(passage, "text");
  let words = string_to_words(text);
  let objections = object_property_get(passage, property);
  let split = app_g_openai_split(objections);
  let ob = list_random_item(split);
  let words2 = string_to_words(ob);
  let concated = list_concat(words, words2);
  let themes_correct = g_themes(concated);
  function lambda2(p) {
    let text_candidate = object_property_get(p, "text");
    let words_candidate = string_to_words(text_candidate);
    let themes_candidate = g_themes(words_candidate);
    let list2 = list_intersect(themes_candidate, themes_correct);
    let size = list_size(list2);
    return size;
  }
  list_sort_number_mapper(passages, lambda2);
  let r6 = integer_random_0(1);
  let passage_wrong = list_get(passages, r6);
  let v2 = {
    ob,
    passage_wrong,
  };
  return v2;
}
