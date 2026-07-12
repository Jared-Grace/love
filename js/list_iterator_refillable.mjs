import { noop } from "./noop.mjs";
import { list_iterator_refillable_on } from "./list_iterator_refillable_on.mjs";
export function list_iterator_refillable(lambda) {
  let next_get = list_iterator_refillable_on(lambda, noop);
  return next_get;
}
