import { lambda_invoker } from "../../../love/public/src/lambda_invoker.mjs";
export function lambda_invoker_single(lambda, arg) {
  let r = lambda_invoker(lambda, [arg]);
  return r;
}
