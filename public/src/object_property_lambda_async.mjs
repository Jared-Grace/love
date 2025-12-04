import { marker } from "../../../love/public/src/marker.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function object_property_lambda_async(object, property_name, lambda) {
  marker("1");
  const exists = object_property_exists(object, property_name);
  if (not(exists)) {
    let value_set = lambda();
    object_property_set(object, property_name, value_set);
  }
  let value = object_property_get(object, property_name);
  return value;
}
