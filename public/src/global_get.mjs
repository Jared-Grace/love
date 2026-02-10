import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { global_alternate_set } from "../../../love/public/src/global_alternate_set.mjs";
let global = {};
export function global_get() {
  let exists = property_exists(global, global_alternate_set.name);
  if (exists) {
    let value = property_get(global, global_alternate_set.name);
    return value;
  }
  return global;
}
