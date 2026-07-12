import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_null_not_is(mapped) {
  let filtered = list_filter(mapped, null_not_is);
  return filtered;
}
