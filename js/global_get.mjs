import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
let global = {};
export function global_get() {
  let exists = property_exists(global, fn_name("global_alternate_set"));
  if (exists) {
    let value = property_get(global, fn_name("global_alternate_set"));
    return value;
  }
  return global;
}
