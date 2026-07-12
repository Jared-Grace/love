import { list_get_or_null } from "./list_get_or_null.mjs";
import { lists_get_generic } from "./lists_get_generic.mjs";
export function lists_get_or_null(lists, index) {
  let getter = list_get_or_null;
  let items = lists_get_generic(getter, index, lists);
  return items;
}
