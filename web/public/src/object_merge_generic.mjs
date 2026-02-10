import { each } from "../../../love/public/src/each.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export function object_merge_generic(strict, to, from) {
  function lambda(property_name) {
    if (strict) {
      if (property_exists(to, property_name)) {
        error_json({
          to,
          from,
          property_name,
        });
      }
    }
    let value = object_property_get(from, property_name);
    object_property_set(to, property_name, value);
  }
  let list = properties_get(from);
  each(list, lambda);
}
