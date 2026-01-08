import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_reduce(inital, reducer, mapped) {
  marker("1");
  let value = inital;
  function lambda2(item) {
    value = reducer(item, value);
  }
  each(mapped, lambda2);
  return value;
}
