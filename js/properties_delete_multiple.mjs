import { properties_delete_curried_right } from "./properties_delete_curried_right.mjs";
import { each } from "./each.mjs";
export function properties_delete_multiple(list, properties) {
  let lambda = properties_delete_curried_right(properties);
  each(list, lambda);
}
