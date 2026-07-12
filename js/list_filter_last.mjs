import { list_last } from "./list_last.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_last(stack, lambda) {
  let list = list_filter(stack, lambda);
  let last = list_last(list);
  return last;
}
