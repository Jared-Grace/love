import { marker } from "../../../love/public/src/marker.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
export function list_property_exists_not_debug(property, all) {
  marker("1");
  function lambda(item, index) {
    let n = object_property_exists_not(item, property);
    if (n) {
      debugger;
    }
  }
  each_index(all, lambda);
}
