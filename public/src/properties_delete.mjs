import { property_delete_curried } from "../../../love/public/src/property_delete_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_delete(object, properties) {
  let lambda = property_delete_curried(object);
  each(properties, lambda);
}
