import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { number_is } from "./number_is.mjs";
export function qa_commit_looked_nearest_first(looked) {
  "The judged commits the folder still holds, nearest to the folder first, out of everything the record was read into.";
  "Nearest first is what makes the front of the list mean freshest. Which order the record itself was written in says nothing about which of its commits is newest, so a reader taking the first entry of the unsorted list would be taking whichever one happened to be filed first.";
  "An entry naming a commit this folder no longer holds has nothing for its distance, so it is left out rather than sorted as though it were nearest. The record is allowed to outlive the history it names, and losing every good entry beside one forgotten name would be the worse answer.";
  "Both readings of the record wanted exactly this run of work, one to find the freshest sound commit and one to find the freshest judgement of any colour. Whichever of the two is asked, the picking apart of green from red belongs after this and not inside it.";
  function placed_is(one) {
    let counted = property_get_or_null(one, "behind");
    let b = number_is(counted);
    return b;
  }
  let placed = list_filter(looked, placed_is);
  function behind_of(one) {
    let counted = property_get_or_null(one, "behind");
    return counted;
  }
  list_sort_number_mapper(placed, behind_of);
  return placed;
}
