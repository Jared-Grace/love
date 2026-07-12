import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
export function throws_not(lambda) {
  let r = lambda_throws(lambda);
  let throws = property_get(r, "throws");
  let valid = not(throws);
  return valid;
}
