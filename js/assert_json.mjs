import { assert_json_get } from "./assert_json_get.mjs";
export function assert_json(b, o) {
  function lambda() {
    return o;
  }
  assert_json_get(b, lambda);
}
