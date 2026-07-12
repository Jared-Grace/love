import { log_keep } from "./log_keep.mjs";
import { property_get } from "./property_get.mjs";
import { error_json } from "./error_json.mjs";
import { property_exists } from "./property_exists.mjs";
export function property_exists_not_assert(object, property_name) {
  let e = property_exists(object, property_name);
  if (e) {
    let value = property_get(object, property_name);
    log_keep(property_exists_not_assert.name, property_name);
    error_json({
      value,
      property_name,
      object,
    });
  }
}
