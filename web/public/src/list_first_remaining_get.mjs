import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
export function list_first_remaining_get(list) {
  let r = list_first_remaining(list);
  let remaining = property_get(r, "remaining");
  return remaining;
}
