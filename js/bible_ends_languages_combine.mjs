import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_all } from "./list_all.mjs";
import { identity } from "./identity.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function bible_ends_languages_combine(ends_each) {
  "Given each chosen bible's answer for the same run of places, whether the sentence has finished in all of them at once.";
  "All of them rather than one of them, because a reader who chose three languages is reading three, and a sentence left half said in the second is as unfinished as one left half said in the first. That is the rule the page itself follows, and this exists to measure what it costs.";
  "A bible that has not got the verse takes no part rather than holding the question open, which is again what the page does - waiting on a hole would spend the whole reach every time. Where no bible has the verse there is nothing to answer with, and the place is null.";
  arguments_assert(arguments, 1);
  let first = list_first(ends_each);
  function lambda(end_first, at) {
    let answers = list_map_property(ends_each, at);
    let known = list_filter(answers, null_not_is);
    let none = list_empty_is(known);
    if (none) {
      return null;
    }
    let all = list_all(known, identity);
    return all;
  }
  let together = list_map_index(first, lambda);
  return together;
}
