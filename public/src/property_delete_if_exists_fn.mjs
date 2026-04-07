import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
export function property_delete_if_exists_fn(object, fn_property) {
  let combined = fn_property();
  let code_ignore = property_delete_if_exists(object, combined);
  return code_ignore;
}
