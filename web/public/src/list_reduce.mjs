import { each } from "../../../love/public/src/each.mjs";
export function list_reduce(inital, reducer, mapped) {
  let value = inital;
  function lambda2(item) {
    value = reducer(item, value);
  }
  each(mapped, lambda2);
  return value;
}
