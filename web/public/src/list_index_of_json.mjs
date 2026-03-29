import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_index_of_json(list, item) {
  let search = json_to(item);
  function lambda(item_found) {
    let json = json_to(item_found);
    let eq2 = equal(json, search);
    return eq2;
  }
  let found = list_find(list, lambda);
  let index = list_index_of(list2, item2);
}
