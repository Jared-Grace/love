import { function_is } from "./function_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function function_is_assert(lambda) {
  let fi = function_is(lambda);
  assert_json(fi, {
    lambda,
  });
}
