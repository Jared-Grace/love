import { not } from "../../../love/public/src/not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { lambda_throws } from "../../../love/public/src/lambda_throws.mjs";
export function throws_not(lambda2) {
  let r2 = lambda_throws(lambda2);
  let throws = property_get(r2, "throws");
  let valid = not(throws);
  return valid;
}
