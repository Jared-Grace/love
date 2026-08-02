import { throws_verdict_assert_json } from "./throws_verdict_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lambda_throws_async } from "./lambda_throws_async.mjs";
export async function throws_assert_json_async(lambda, json) {
  arguments_assert(arguments, 2);
  ("Insists that a lambda which has to be waited for refuses, and hands back what");
  ("it refused with so the words can be read.");
  ("The twin of the plain one for work that is awaited.");
  let r = await lambda_throws_async(lambda);
  let result = throws_verdict_assert_json(r, json);
  return result;
}
