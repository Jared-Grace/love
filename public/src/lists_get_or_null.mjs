import { marker } from "../../../love/public/src/marker.mjs";
import { lists_get_generic } from "../../../love/public/src/lists_get_generic.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function lists_get_or_null(lists, index) {
  marker("1");
  let getter = list_get;
  const items = lists_get_generic(getter, index, lists);
  return items;
}
