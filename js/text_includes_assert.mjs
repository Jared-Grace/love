import { assert_json_get } from "./assert_json_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_includes_assert(input, part) {
  let i = text_includes(input, part);
  let r = {
    input,
    part,
  };
  assert_json(i, r);
}
