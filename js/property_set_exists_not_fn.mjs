import { property_set_exists_not } from "./property_set_exists_not.mjs";
export function property_set_exists_not_fn(object, property_name_get, value) {
  let property_name = property_name_get();
  property_set_exists_not(object, property_name, value);
}
