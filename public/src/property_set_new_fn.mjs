import { property_set_new } from "../../../love/public/src/property_set_new.mjs";
export function property_set_new_fn(fn, value) {
  let property_name = fn();
  let object = property_set_new(property_name, value);
  return object;
}
