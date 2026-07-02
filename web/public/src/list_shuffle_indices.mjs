import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
export function list_shuffle_indices(list, indices) {
  function lambda(i) {
    let j = list_random_item(indices);
    list_swap_at(list, i, j);
  }
  each(indices, lambda);
}
