import { property_get } from "../../../love/public/src/property_get.mjs";
import { lambda_throws } from "../../../love/public/src/lambda_throws.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function throws_assert(lambda) {
  let r = lambda_throws(lambda);
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert(throws);
  return result;
}
