import { property_get } from "./property_get.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
import { assert } from "./assert.mjs";
export function throws_assert(lambda) {
  let r = lambda_throws(lambda);
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert(throws);
  return result;
}
