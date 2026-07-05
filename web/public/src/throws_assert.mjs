import { assert } from "../../../love/public/src/assert.mjs";
export function throws_assert(lambda) {
  let throws = true;
  let result = null;
  try {
    lambda();
    throws = false;
  } catch (e) {
    result = e;
  }
  assert(throws);
  return result;
}
