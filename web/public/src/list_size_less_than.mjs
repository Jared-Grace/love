import { list_size } from "../../../love/public/src/list_size.mjs";
import { less_than_by } from "../../../love/public/src/less_than_by.mjs";
export function list_size_less_than(list_a, list_b) {
  let v2 = less_than_by(list_a, list_b, list_size);
  return v2;
}
