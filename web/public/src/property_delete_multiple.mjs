import { property_delete_curried } from "../../../love/public/src/property_delete_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function property_delete_multiple(object, properties) {
  let lambda = property_delete_curried(object);
  each(properties, lambda);
}
