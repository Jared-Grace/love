import { lists_get_generic } from "./lists_get_generic.mjs";
import { list_get } from "./list_get.mjs";
export function lists_get(lists, index) {
  let getter = list_get;
  let items = lists_get_generic(getter, index, lists);
  return items;
}
