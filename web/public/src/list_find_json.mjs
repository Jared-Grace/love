import { equal_by_json } from "../../../love/public/src/equal_by_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_json(list, expected) {
  marker("1");
  let l = equal_by_json(expected);
  let found = list_find(list, l);
  return found;
}
