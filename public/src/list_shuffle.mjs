import { list_shuffle_indices } from "../../../love/public/src/list_shuffle_indices.mjs";
import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
export function list_shuffle(list) {
  let indices = list_to_indices(list);
  list_shuffle_indices(list, indices);
}
