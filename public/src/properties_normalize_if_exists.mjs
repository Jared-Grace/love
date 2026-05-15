import { property_normalize_if_exists } from "../../../love/public/src/property_normalize_if_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(name_properties) {
  each(name_properties, property_normalize_if_exists);
}
