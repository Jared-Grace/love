import { property_get } from "./property_get.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
export function list_last_remaining_get(arg_names) {
  let result = list_last_remaining(arg_names);
  let remaining = property_get(result, "remaining");
  return remaining;
}
