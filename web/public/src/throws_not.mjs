import { not } from "../../../love/public/src/not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { lambda_throws } from "../../../love/public/src/lambda_throws.mjs";
export function throws_not(lambda) {
  let r = lambda_throws(lambda);
  let throws = property_get(r, "throws");
  let valid = not(throws);
  return valid;
}
