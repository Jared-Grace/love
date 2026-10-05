import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
export function app_search_languages_answers_joined(
  asked,
  words,
  languages_unsearchable,
) {
  arguments_assert(arguments, 3);
  function missing_everywhere(word) {
    function lacks(a) {
      let not_asked = list_includes_not(a.words, word);
      let missing = not_asked || list_includes(a.words_missing, word);
      return missing;
    }
    let all = list_all(asked, lacks);
    return all;
  }
  let words_missing = list_filter(words, missing_everywhere);
  let dictionary = {};
  for (let a of asked) {
    for (let [chapter_code, verses] of Object.entries(a.dictionary)) {
      let held = dictionary[chapter_code] || [];
      dictionary[chapter_code] = list_concat_unique(held, verses);
    }
  }
  for (let chapter_code of object_property_names(dictionary)) {
    function lambda2(a, b) {
      let left = Number(a);
      let right = Number(b);
      let difference = subtract(left, right);
      return difference;
    }
    dictionary[chapter_code].sort(lambda2);
  }
  let r = {
    words,
    words_missing,
    dictionary,
    languages_unsearchable,
  };
  return r;
}
