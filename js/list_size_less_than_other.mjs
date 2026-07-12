import { list_size } from "./list_size.mjs";
import { less_than_by } from "./less_than_by.mjs";
export function list_size_less_than_other(list_a, list_b) {
  let v = less_than_by(list_a, list_b, list_size);
  return v;
}
