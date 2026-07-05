import { assert } from "../../../love/public/src/assert.mjs";
export function throws_assert(lambda) {
  let throws = false;
  let result = null;
  try {
    lambda();
  } catch (e) {
    throws = true;
    result = e;
  }
  assert(throws);
  return result;
}
