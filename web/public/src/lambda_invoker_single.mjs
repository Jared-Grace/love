import { lambda_invoker } from "../../../love/public/src/lambda_invoker.mjs";
export function lambda_invoker_single(lambda, fn) {
  let r = lambda_invoker(lambda, [fn]);
  return r;
}
