import { each_next } from "../../../love/public/src/each_next.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function each_next_reverse(list, lambda$item$next) {
  let reversed = list_copy_reverse(list);
  let v = each_next(reversed, lambda$item$next);
  return v;
}
