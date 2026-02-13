import { lambda_invoker } from "../../../love/public/src/lambda_invoker.mjs";
export function lambda_invoker_single(fn, arg) {
  let r = lambda_invoker(fn, [arg]);
  return r;
}
