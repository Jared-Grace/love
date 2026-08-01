import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_2(body_block) {
  let left = list_size(body_block);
  let r = equal(left, 2);
  return r;
}
