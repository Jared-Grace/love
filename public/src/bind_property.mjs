import { bind } from "../../../love/public/src/bind.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function bind_property(object, property_name) {
  marker("1");
  let value = object_property_get(object, property_name);
  let fn = bind(value, object);
  return fn;
}
