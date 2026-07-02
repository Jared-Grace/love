import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_cycled_shuffle(list, cycle_size) {
  let r = list_shuffle(list);
  return r;
}
