import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
export function property_exists_if_get(overrides, plugin_fn) {
  let v = property_get_or_null(overrides, plugin_fn);
  if (null_not_is(v)) {
    plugin_fn = v;
  }
  return plugin_fn;
}
