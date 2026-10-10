import { property_name_internal_not_assert } from "./property_name_internal_not_assert.mjs";
export function list_set(list, index, value) {
  property_name_internal_not_assert(index);
  list[index] = value;
}
