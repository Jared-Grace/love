import { not_assert_json } from "./not_assert_json.mjs";
import { text_padded_is } from "./text_padded_is.mjs";
export function text_padded_not_is_assert(suffix, padding) {
  let p = text_padded_is(suffix, padding);
  not_assert_json(p, {
    hint: "the suffix shouldn't already carry this padding — was it padded twice?",
    suffix,
    padding,
  });
}
