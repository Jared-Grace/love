import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
export function integer_is_assert(i) {
  let ii = integer_is(i);
  assert_json(ii, {
    i,
  });
}
