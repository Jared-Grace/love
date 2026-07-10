import { less_than } from "../../../love/public/src/less_than.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_less_than_value(list, value) {
  list_size(list);
  let v = less_than(list, value);
  return v;
}
