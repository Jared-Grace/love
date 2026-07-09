import { list_indices_to_items_try } from "../../../love/public/src/list_indices_to_items_try.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function list_get_nearby(list, index, nearness) {
  let indices = range_from(subtract(index, nearness), text_combine(index, nearness));
  let nearby = list_indices_to_items_try(list, indices);
  return nearby;
}
