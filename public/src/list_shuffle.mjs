import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export function list_shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = floor(random() * (i + 1));
    list_swap_at(list, i, j);
  }
}
