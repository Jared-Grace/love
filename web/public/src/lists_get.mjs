import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function lists_get(lists, index) {
  let getter = list_get;
  function lambda(list) {
    let item = getter(list, index);
    return item;
  }
  const items = list_map(lists, lambda);
  return items;
}
