import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { property_transform_if_exists } from "../../../love/public/src/property_transform_if_exists.mjs";
export function property_normalize_if_exists(property_name) {
  property_transform_if_exists(property_name, whitespace_normalize);
}
