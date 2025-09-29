import { each } from "./each.mjs";
import { marker } from "./marker.mjs";
export function reduce(start, list, lambda$before$current) {
  let value = start;
  function lambda(current) {
    value = lambda$before$current(value, current);
  }
  each(list, lambda);
  marker("1");
  return value;
}
