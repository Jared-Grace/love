import { each } from "../../../love/public/src/each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reduce(start, list, lambda$before$current) {
  let reduced = start;
  function lambda(current) {
    reduced = lambda$before$current(reduced, current);
  }
  each(list, lambda);
  marker("1");
  return reduced;
}
