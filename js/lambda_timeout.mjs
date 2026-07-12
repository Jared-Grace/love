import { lambda_timeout_generic } from "./lambda_timeout_generic.mjs";
export async function lambda_timeout(fn, ms) {
  let value = new Error(lambda_timeout.name);
  let r = await lambda_timeout_generic(fn, ms, value);
  return r;
}
