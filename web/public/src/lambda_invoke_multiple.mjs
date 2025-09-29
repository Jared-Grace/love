import { lambda_invoke } from "../../../love/public/src/lambda_invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function lambda_invoke_multiple(afters) {
  each(afters, lambda_invoke);
}
