import { lambda_timeout_generic } from "../../../love/public/src/lambda_timeout_generic.mjs";
export async function lambda_timeout_null(fn, ms) {
  let value = null;
  let r = await lambda_timeout_generic(fn, ms, value);
  return r;
}
