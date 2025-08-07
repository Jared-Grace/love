import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { undefined_is } from "./undefined_is.mjs";

export function object_property_get(object, property_name) {
  let value = object[property_name];
  if (undefined_is(value)) {
    error(json_to({object,property_name}))
  }
  return value
}


