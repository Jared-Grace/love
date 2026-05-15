import { property_normalize_if_exists_curried } from "../../../love/public/src/property_normalize_if_exists_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(object, properties) {
  let lambda = property_normalize_if_exists_curried(object);
  each(properties, lambda);
}
