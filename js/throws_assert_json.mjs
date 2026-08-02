import { throws_verdict_assert_json } from "./throws_verdict_assert_json.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
export function throws_assert_json(lambda, json) {
  let r = lambda_throws(lambda);
  let result = throws_verdict_assert_json(r, json);
  return result;
}
