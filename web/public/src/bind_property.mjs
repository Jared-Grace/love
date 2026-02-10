import { bind } from "../../../love/public/src/bind.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function bind_property(object, property_name) {
  let value = property_get(object, property_name);
  let fn = bind(value, object);
  return fn;
}
