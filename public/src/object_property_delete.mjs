import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function object_property_delete(object, property_name) {
  delete object[property_name];
}
