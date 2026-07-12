import { list_reduce } from "./list_reduce.mjs";
import { add } from "./add.mjs";
export function list_sum(list) {
  let inital = 0;
  let reducer = add;
  let value = list_reduce(list, reducer, inital);
  return value;
}
