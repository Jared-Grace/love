import { arguments_assert } from "./arguments_assert.mjs";
import { functions_search_shown_count } from "./functions_search_shown_count.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
import { object_found_shown } from "./object_found_shown.mjs";
import { property_set } from "./property_set.mjs";
export async function functions_searches_found_shown(searches) {
  "Several name searches asked in turn, each answer kept under the search that found it and each one shortened to a screenful beside how many names it really matched.";
  "The count beside every search is what makes a row of them worth reading. Asking several searches at once is a way of finding out which words this repo answers to, and that is a comparison between the answers - which a row of shortened maps cannot be, because the number a map was cut down from is the very thing being compared.";
  arguments_assert(arguments, 1);
  let count = functions_search_shown_count();
  let found = {};
  for (let search of searches) {
    let all = await functions_search_all(search);
    let summary = object_found_shown(all, count);
    property_set(found, search, summary);
  }
  return found;
}
