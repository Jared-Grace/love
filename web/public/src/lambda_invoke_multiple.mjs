import { lambda_invoke } from "./lambda_invoke.mjs";
import { each } from "./each.mjs";
export function lambda_invoke_multiple(afters) {
  each(afters, lambda_invoke);
}
