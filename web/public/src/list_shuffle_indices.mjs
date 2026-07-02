import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export function list_shuffle_indices(list, indices) {
  function lambda(item) {
    let r = list_random_item(list2);
    list_swap_at(list, i, j);
  }
  each(indices, lambda);
  for (let i = list.length - 1; i > 0; i--) {
    const j = floor(random() * (i + 1));
  }
}
