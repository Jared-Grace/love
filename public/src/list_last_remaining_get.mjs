import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_last_remaining } from "../../../love/public/src/list_last_remaining.mjs";
export function list_last_remaining_get(arg_names) {
  let result = list_last_remaining(arg_names);
  let remaining = property_get(result, "remaining");
  return remaining;
}
