import { property_not } from "./property_not.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
export function throws_not(lambda) {
  let r = lambda_throws(lambda);
  let valid = property_not(r, "throws");
  return valid;
}
