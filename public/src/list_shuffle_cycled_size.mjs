import { list_shuffle_cycled } from "../../../love/public/src/list_shuffle_cycled.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_shuffle_cycled_size(list, counts) {
  let size = list_size(counts);
  list_shuffle_cycled(list, size);
}
