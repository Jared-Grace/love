import { list_map } from "../../../love/public/src/list_map.mjs";
export function lists_get_generic(getter, index, lists) {
  function lambda(list) {
    let item = getter(list, index);
    return item;
  }
  const items = list_map(lists, lambda);
  return items;
}
