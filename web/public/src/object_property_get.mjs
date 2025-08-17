import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function object_property_get(object, property_name) {
  let value = object[property_name];
  if (undefined_is(value)) {
    const message = {
      object,
      property_name,
    };
    let message2 = json_to(message);
    error(message2);
  }
  return value;
}
