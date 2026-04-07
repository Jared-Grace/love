import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
export function property_delete_if_exists_fn(extra, fn) {
  let combined = fn();
  let code_ignore = property_delete_if_exists(extra, combined);
  return code_ignore;
}
