import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_index_reverse(list, lambda$item$index) {
  let reversed = list_copy_reverse(list);
  each_index(reversed, lambda$item$index);
}
