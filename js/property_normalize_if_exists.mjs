import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { property_transform_if_exists } from "./property_transform_if_exists.mjs";
export function property_normalize_if_exists(object, property_name) {
  property_transform_if_exists(object, property_name, whitespace_normalize);
}
