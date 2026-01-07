import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
export function list_property_exists_not_error(all, property) {
  marker("1");
  function lambda(item, index) {
    let n = object_property_exists_not(item, property);
    if (n) {
      error({
        index,
      });
    }
  }
  each_index(all, lambda);
}
