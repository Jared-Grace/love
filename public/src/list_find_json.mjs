import { marker } from "../../../love/public/src/marker.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
export function list_find_json(expected, list) {
  marker("1");
  function lambda4(item) {
    let eq = equal_by(item, expected, json_to);
    return eq;
  }
  let only = list_find(list, lambda4);
  return only;
}
