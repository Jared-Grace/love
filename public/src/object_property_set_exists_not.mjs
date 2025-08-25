import {object_property_set} from "./object_property_set.mjs";
import {object_property_exists_not_assert} from "./object_property_exists_not_assert.mjs";
export function object_property_set_exists_not(object, property_name, value) {
  object_property_exists_not_assert(object, property_name);
  object_property_set(object, property_name, value);
}
