import { text_to } from "../../../love/public/src/text_to.mjs";
import { throws_assert } from "../../../love/public/src/throws_assert.mjs";
export function throws_assert_text(lambda2) {
  let e = throws_assert(lambda2);
  let input = text_to(e);
  return input;
}
