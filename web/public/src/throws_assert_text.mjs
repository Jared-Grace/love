import { text_to } from "../../../love/public/src/text_to.mjs";
import { throws_assert } from "../../../love/public/src/throws_assert.mjs";
export function throws_assert_text(lambda) {
  let e = throws_assert(lambda);
  let input = text_to(e);
  return input;
}
