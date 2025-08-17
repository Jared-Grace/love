import {assert_json} from "./assert_json.mjs";
import {integer_is} from "./integer_is.mjs";
export function integer_is_assert(index) {
  let ii = integer_is(index);
  assert_json(ii, {
    index
  });
}
