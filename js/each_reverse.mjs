import { each } from "../../../love/public/src/each.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function each_reverse(list, lambda) {
  let reversed = list_copy_reverse(list);
  each(reversed, lambda);
}
