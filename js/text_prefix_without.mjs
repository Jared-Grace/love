import { assert_json_get } from "./assert_json_get.mjs";
import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function text_prefix_without(t, prefix) {
  let a = text_starts_with(t, prefix);
  function lambda() {
    let r = {
      t,
      prefix,
    };
    return r;
  }
  assert_json_get(a, lambda);
  let without = text_prefix_without_inner(t, prefix);
  return without;
}
