import { functions_search_multiple } from "./functions_search_multiple.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { list_first } from "./list_first.mjs";
import { object_pick } from "./object_pick.mjs";
export async function functions_search_intersect(searches_comma) {
  "The functions whose name holds every one of several words, rather than any of them.";
  "The twin next door keeps its answers apart, one set under each word, and that is the right shape while the words are still guesses at what the repo calls a thing - what you want to see is which guess it answered to. Once the words are all right and each is too common to ask alone, the same shape is the wrong one: asking for the two or three names holding both js and rename prints hundreds of names to hide them among, and the narrowing has to be done by eye across sets nobody wanted printed.";
  "So this is not a second way of searching, it is the twin's answer kept only where every word agrees. Nothing here reads the repo a second time.";
  let per_word = await functions_search_multiple(searches_comma);
  let words = properties_get(per_word);
  function names_of(word) {
    let set = property_get(per_word, word);
    let names = properties_get(set);
    return names;
  }
  let name_lists = list_map(words, names_of);
  let held_by_all = list_intersect_multiple(name_lists);
  let word_first = list_first(words);
  let set_first = property_get(per_word, word_first);
  let picked = object_pick(set_first, held_by_all);
  return picked;
}
