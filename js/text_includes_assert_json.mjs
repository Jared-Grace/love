import { assert_json } from "./assert_json.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_includes_assert_json(input, part, json) {
  let i = text_includes(input, part);
  assert_json(i, {
    input,
    part,
    json,
  });
}
