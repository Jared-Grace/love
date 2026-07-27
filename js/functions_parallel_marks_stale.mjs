import { arguments_assert } from "./arguments_assert.mjs";
import { functions_duplicates } from "./functions_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { function_parallel_marked_is } from "./function_parallel_marked_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function functions_parallel_marks_stale() {
  "Every function still saying it is alike on purpose when nothing shares its shape any more.";
  "A mark is a claim, and this is the claim going quietly false. Somebody edits one of a marked pair, the two stop matching, and the mark on the other stays - saying a twin exists that does not. That is worse than no mark at all, because the next function that really does duplicate this one is excused by it, and the search that exists to find such a pair reports it as meant.";
  arguments_assert(arguments, 0);
  let groups = await functions_duplicates();
  let grouped = [];
  for (let group of groups) {
    let names = property_get(group, "names");
    list_add_multiple(grouped, names);
  }
  let mark_name = function_duplicate_kind_parallel.name;
  let search = await data_identifiers_search(mark_name);
  let referrers = properties_get(search);
  let stale = [];
  for (let f_name of referrers) {
    let marked = await function_parallel_marked_is(f_name);
    if (not(marked)) {
      continue;
    }
    let paired = list_includes(grouped, f_name);
    if (not(paired)) {
      list_add(stale, f_name);
    }
  }
  return stale;
}
