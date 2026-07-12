import { property_delete_curried } from "./property_delete_curried.mjs";
import { each } from "./each.mjs";
export function properties_delete(object, properties) {
  let lambda = property_delete_curried(object);
  each(properties, lambda);
}
