import { list_remove_start } from "./list_remove_start.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_size_max_skip(list, max) {
  let size = list_size(list);
  if (greater_than(size, max)) {
    let s = subtract(size, max);
    list_remove_start(list, s);
  }
  return list;
}
