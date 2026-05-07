import { assert } from "../../../love/public/src/assert.mjs";
export function throws(lambda) {
  let success = true;
  let result = null;
  try {
    lambda();
    success = false;
  } catch (e) {
    result = e;
  }
  assert(b);
  return e;
}
