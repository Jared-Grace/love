import { assert_json_get } from "./assert_json_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_includes_assert(input, part) {
  let i = text_includes(input, part);
  function lambda() {
    let r = {
      input,
      part,
    };
    return r;
  }
  assert_json_get(i, lambda);
}
