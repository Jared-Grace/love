import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function global_override(fn) {
  let registry = property_get_or_null(globalThis, "overrides_global");
  if (!registry) {
    registry = {};
    property_set(globalThis, "overrides_global", registry);
  }
  let key = fn.name;
  let overrides = property_get_or_null(registry, key);
  if (!overrides) {
    overrides = {};
    property_set(registry, key, overrides);
  }
  return overrides;
}
