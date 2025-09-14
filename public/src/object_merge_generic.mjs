import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { error } from "./error.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_merge_generic(strict, to, from) {
  function lambda(p) {
    if (strict) {
      if (object_property_exists(to, p)) {
        error();
      }
    }
    let value = object_property_get(from, p);
    object_property_set(to, p, value);
  }
  let list = object_properties(from);
  each(list, lambda);
}
