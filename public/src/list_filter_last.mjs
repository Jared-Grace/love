import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_last(stack, lambda3) {
  let list = list_filter(stack, lambda3);
  let last = list_last(list);
  return last;
}
