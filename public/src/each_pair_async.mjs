import { marker } from "./marker.mjs";
import { each_multiple } from "./each_multiple.mjs";
export function each_pair_async(list_a, list_b, lambda$a$b) {
  marker("1");
  let lists = [list_a, list_b];
  each_multiple(lists, lambda);
  function lambda(items) {
    let [a, b] = items;
    lambda$a$b(a, b);
  }
}
