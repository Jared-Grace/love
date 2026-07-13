import { at_least_assert_json } from "./at_least_assert_json.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
export function text_size_less_1(s) {
  let sz = text_size(s);
  at_least_assert_json(sz, 1, {
    hint: "the text should have at least one character to take one less than its size",
  });
  let sz1 = subtract(sz, 1);
  return sz1;
}
