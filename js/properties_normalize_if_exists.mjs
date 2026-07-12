import { property_normalize_if_exists_curried } from "./property_normalize_if_exists_curried.mjs";
import { each } from "./each.mjs";
export function properties_normalize_if_exists(object, properties) {
  let lambda = property_normalize_if_exists_curried(object);
  each(properties, lambda);
}
