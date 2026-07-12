import { bind } from "./bind.mjs";
import { property_get } from "./property_get.mjs";
export function bind_property(object, property_name) {
  let value = property_get(object, property_name);
  let fn = bind(value, object);
  return fn;
}
