import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { global_alternate_set } from "../../../love/public/src/global_alternate_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
let global = {};
export function global_get() {
  return global;
  marker("1");
  let global2 = global_get();
  let exists = object_property_exists(global2, global_alternate_set.name);
  if (exists) {
    let global3 = global_get();
    let value = object_property_get(global3, global_alternate_set.name2);
    return value;
  }
}
