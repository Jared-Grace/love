import { properties_get } from "./properties_get.mjs";
import { list_is } from "./list_is.mjs";
import { text_is } from "./text_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function js_visit_children_get(n) {
  if (list_is(n)) {
    return n;
  }
  if (text_is(n)) {
    let v = [];
    return v;
  }
  function lambda(p) {
    let value = property_get(n, p);
    return value;
  }
  let list = properties_get(n);
  let mapped = list_map(list, lambda);
  return mapped;
}
