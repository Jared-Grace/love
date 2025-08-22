import { object_properties } from "./object_properties.mjs";
import { list_is } from "./list_is.mjs";
import { string_is } from "./string_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function js_visit_children_get(n) {
  if (list_is(n)) {
    return n;
  }
  if (string_is(n)) {
    let v = [];
    return v;
  }
  function lambda(p) {
    let value = object_property_get(n, p);
    return value;
  }
  let list = object_properties(n);
  let mapped = list_map(list, lambda);
  return mapped;
}
