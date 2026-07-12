import { text_to } from "./text_to.mjs";
import { throws_assert } from "./throws_assert.mjs";
export function throws_assert_text(lambda) {
  let e = throws_assert(lambda);
  let input = text_to(e);
  return input;
}
