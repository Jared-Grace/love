import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function list_map(list, lambda$item) {
  list_is_assert(list);
  fn_name("data_identifiers_search_multiple") +
    " needed this wrapping " +
    lambda;
  function lambda(item) {
    let r = lambda$item(item);
    return r;
  }
  let mapped = list.map(lambda);
  return mapped;
}
