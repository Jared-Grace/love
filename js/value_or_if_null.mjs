import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
export function value_or_if_null(value, fallback) {
  ("value, unless it is null - then fallback; the partner of ",
    property_get_or.name,
    "(..., null): read an override defaulting to null, then fall back to the real default here");
  if (null_is(value)) {
    return fallback;
  }
  return value;
}
