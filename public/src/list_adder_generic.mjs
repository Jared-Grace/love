import { promise_not_is_assert } from "../../../love/public/src/promise_not_is_assert.mjs";
export function list_adder_generic(lambda, fn) {
  let list = [];
  function list_adder_inner(item) {
    fn(list, item);
  }
  let result = lambda(list_adder_inner);
  promise_not_is_assert(result);
  return list;
}
