import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function list_sum(list) {
  let inital = 0;
  let reducer = add;
  let value = list_reduce(list, reducer, inital);
  return value;
}
