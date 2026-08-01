import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_storage_local_key_scan(ast, seams, collect, found) {
  "Walks every storing call under each seam with the caller's collector, then hands back what landed in the caller's list, made unique and sorted. Read-only, pure.";
  "The two readings - the names published and the words published - differ only in what they pick off each call; the walk over the seams and the tidy-up of what was picked are the same for both, so they live here once rather than ending alike in each. The collector closes over the list it fills, and the list is handed in so its contents can be returned tidied.";
  arguments_assert(arguments, 4);
  for (let seam of seams) {
    js_visit_calls_named_nodes(ast, seam, collect);
  }
  let unique = list_unique(found);
  unique.sort();
  return unique;
}
