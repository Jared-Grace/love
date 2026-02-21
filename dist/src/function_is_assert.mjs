import { function_is } from "../../../love/public/src/function_is.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export function function_is_assert(lambda) {
  let fi = function_is(lambda);
  assert_json(fi, {
    lambda,
  });
}
