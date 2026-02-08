import { curry } from "../../../love/public/src/curry.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_indices_to_items(list, indices) {
  let lambda$item = curry(list_get)(list);
  let nearby = list_map(indices, lambda$item);
  return nearby;
}
