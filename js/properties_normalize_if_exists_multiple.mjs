import { each } from "./each.mjs";
import { properties_normalize_if_exists_curried_right } from "./properties_normalize_if_exists_curried_right.mjs";
export function properties_normalize_if_exists_multiple(
  contacts,
  name_properties,
) {
  let lambda = properties_normalize_if_exists_curried_right(name_properties);
  each(contacts, lambda);
}
