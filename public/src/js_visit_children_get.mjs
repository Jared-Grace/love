import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { string_is } from "../../../love/public/src/string_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
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
