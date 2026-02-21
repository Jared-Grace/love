import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_shuffle_take(list, count) {
  list_shuffle(list);
  let taken = list_take(list, count);
  return taken;
}
