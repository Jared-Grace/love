import { assert_json } from "./assert_json.mjs";
export function assert_left_right(b, left, right) {
  let lr = {
    left,
    right,
  };
  assert_json(b, lr);
}
