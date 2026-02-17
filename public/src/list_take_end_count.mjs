import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_end_count(list, count) {
  let end = list_size(list);
  let c = end - count;
  let result = list_take(list, c);
  return result;
}
