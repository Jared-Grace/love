import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
export function property_delete_if_exists_fn(object, fn_property) {
  let p = fn_property();
  let exists = property_delete_if_exists(object, p);
  return exists;
}
