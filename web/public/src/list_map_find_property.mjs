import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_map_find_property(list_other, property, list) {
  marker("1");
  function lambda4(item) {
    let r = list_find_property(list_other, property, item);
    return r;
  }
  let founds = list_map(list, lambda4);
  return founds;
}
