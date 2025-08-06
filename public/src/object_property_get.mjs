import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";

export function object_property_get(object, property_name) {
  let value = object[property_name];
  if (undefined_is(value)) {
    error(json_to({object,property_name}))
  }
  return value
}
function undefined_is(value) {
    return typeof value === 'undefined';
}

