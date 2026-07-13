import { promise_not_is_assert_json } from "./promise_not_is_assert_json.mjs";
export function list_adder_generic(lambda, fn) {
  let list = [];
  function list_adder_inner(item) {
    fn(list, item);
    return list;
  }
  let result = lambda(list_adder_inner);
  promise_not_is_assert_json(result, {
    hint: "the adder lambda should be synchronous — did it return a promise? use list_adder_async for async work",
  });
  return list;
}
