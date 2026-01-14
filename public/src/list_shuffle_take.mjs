import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_shuffle_take(encouragement, verse_count) {
  list_shuffle(encouragement);
  let taken = list_take(encouragement, verse_count);
  return taken;
}
