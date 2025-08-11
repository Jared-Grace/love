import { each_multiple } from "./each_multiple.mjs";
export function each_pair(list_a, list_b, lambda3) {
  let lists = [list_a, list_b];
  each_multiple(lists, lambda);
  function lambda(items) {
    let [a, b] = items;
    lambda3(a, b);
  }
}
