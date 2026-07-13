import { assert_json } from "./assert_json.mjs";
import { true_is } from "./true_is.mjs";
export function true_is_assert_json(enabled, json) {
  let ti = true_is(enabled);
  assert_json(ti, json);
}
