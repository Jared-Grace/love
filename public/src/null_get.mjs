import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
export function null_get() {
  let r = lambda_get(null);
  return r;
}
