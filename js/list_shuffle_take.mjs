import { list_take } from "./list_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function list_shuffle_take(list, count) {
  list_shuffle(list);
  let taken = list_take(list, count);
  return taken;
}
