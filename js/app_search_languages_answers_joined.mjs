import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_any } from "./list_any.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
export function app_search_languages_answers_joined(
  asked,
  words,
  languages_unsearchable,
) {
  "One answer out of every language's answer: the chapters and verses all joined and put back in verse order, and the words that were missing from all of them.";
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
  ("ONE LANGUAGE FAILING TO REACH ITS INDEX IS ENOUGH TO UNSETTLE THE WHOLE WORD, which is why this asks whether any language could not reach rather than whether all of them could not. Absence is only ever proved by a lookup that arrived and said nothing is there, so a single lookup that never arrived leaves the word unproven - and calling it absent anyway would tell a reader their spelling is wrong on the strength of a dropped connection.");
  function unreachable_somewhere(word) {
    function unreached(a) {
      let could_not = list_includes(a.words_unreachable, word);
      return could_not;
    }
    let any = list_any(asked, unreached);
    return any;
  }
  let words_unreachable = list_filter(words_missing, unreachable_somewhere);
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
    words_unreachable,
    dictionary,
    languages_unsearchable,
  };
  return r;
}
