import { each } from "./each.mjs";
import { marker } from "./marker.mjs";
export function reduce(start, list, lambda$before$current) {
  let reduced = start;
  function lambda(current) {
    reduced = lambda$before$current(reduced, current);
  }
  each(list, lambda);
  marker("1");
  return reduced;
}
