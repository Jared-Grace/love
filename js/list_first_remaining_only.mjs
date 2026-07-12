import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
export function list_first_remaining_only(list) {
  let r = list_first_remaining(list);
  let remaining = property_get(r, "remaining");
  return remaining;
}
