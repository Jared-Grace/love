import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_transform(o, property, lambda$value) {
  let transformed = property_get(o, property);
  transformed = lambda$value(transformed);
  property_set(o, property, transformed);
  return transformed;
}
