import { false_is } from "./false_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function false_is_assert_json(b, json) {
  let ti = false_is(b);
  assert_json(ti, json);
}
