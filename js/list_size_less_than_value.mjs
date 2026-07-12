import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_less_than_value(list, value) {
  list_size(list);
  let lt = less_than(list, value);
  return lt;
}
