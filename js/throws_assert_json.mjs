import { property_get } from "./property_get.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
import { assert_json } from "./assert_json.mjs";
export function throws_assert_json(lambda, json) {
  let r = lambda_throws(lambda);
  let result = throws_verdict_assert_json(r, json);
  return result;
}
