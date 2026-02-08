import { list_indices_to_items_try } from "../../../love/public/src/list_indices_to_items_try.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
export function list_items_nearby(index, nearness, list) {
  let indices = range_from(index - nearness, index + nearness);
  let nearby = list_indices_to_items_try(list, indices);
  return nearby;
}
