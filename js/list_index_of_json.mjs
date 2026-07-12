import { list_index_of } from "./list_index_of.mjs";
import { equal } from "./equal.mjs";
import { json_to } from "./json_to.mjs";
import { list_find } from "./list_find.mjs";
export function list_index_of_json(list, item) {
  let search = json_to(item);
  function lambda(item_found) {
    let json = json_to(item_found);
    let eq = equal(json, search);
    return eq;
  }
  let found = list_find(list, lambda);
  let index = list_index_of(list, found);
  return index;
}
