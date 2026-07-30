import { assert_json_get } from "./assert_json_get.mjs";
import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function text_prefix_without(t, prefix) {
  let a = text_starts_with(t, prefix);
  let r = {
    t,
    prefix,
  };
  assert_json(a, r);
  let without = text_prefix_without_inner(t, prefix);
  return without;
}
