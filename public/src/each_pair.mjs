import { each_multiple } from "../../../love/public/src/each_multiple.mjs";
export function each_pair(list_a, list_b, lambda$a$b) {
  let each_fn = each_multiple;
  let lists = [list_a, list_b];
  each_multiple(lists, lambda);
  function lambda(items) {
    let [a, b] = items;
    lambda$a$b(a, b);
  }
}
