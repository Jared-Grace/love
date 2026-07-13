import { property_get } from "./property_get.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
import { assert_json } from "./assert_json.mjs";
export function throws_assert_json(lambda, json) {
  let r = lambda_throws(lambda);
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert_json(throws, {
    result,
    json,
  });
  return result;
}
