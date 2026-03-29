import { lambda_timeout_generic } from "../../../love/public/src/lambda_timeout_generic.mjs";
export async function lambda_timeout(fn, ms) {
  let value = new Error(lambda_timeout.name);
  let r = await lambda_timeout_generic(fn, value, ms);
  return r;
}
