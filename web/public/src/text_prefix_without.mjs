import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { text_prefix_without_inner } from "../../../love/public/src/text_prefix_without_inner.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function text_prefix_without(s, prefix) {
  let a = text_starts_with(s, prefix);
  function lambda() {
    let r = {
      s,
      prefix,
    };
    return r;
  }
  assert_json_get(a, lambda);
  if (not(a)) {
    error();
  }
  let without = text_prefix_without_inner(prefix, s);
  return without;
}
