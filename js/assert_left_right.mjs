import { assert_json_get } from "../../love/js/assert_json_get.mjs";
export function assert_left_right(b, left, right) {
  function lambda() {
    let lr = {
      left,
      right,
    };
    return lr;
  }
  assert_json_get(b, lambda);
}
