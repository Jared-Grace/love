import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { error_json } from "./error_json.mjs";
import { list_map } from "./list_map.mjs";
export function object_merge_generic(strict, to, from) {
  let ps = list_map([to, from], object_properties);
  function lambda(property_name) {
    if (strict) {
      if (object_property_exists(to, property_name)) {
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
  let list = object_properties(from);
  each(list, lambda);
}
