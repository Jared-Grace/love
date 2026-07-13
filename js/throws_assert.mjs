import { property_get } from "./property_get.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
import { assert_message } from "./assert_message.mjs";
export function throws_assert(lambda) {
  let r = lambda_throws(lambda);
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert_message(throws, "This code was expected to throw, but it finished peacefully. Should it be throwing here?");
  return result;
}
