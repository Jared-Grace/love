import { marker } from "../../../love/public/src/marker.mjs";
import { lambda_invoke } from "../../../love/public/src/lambda_invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple(afters) {
  marker("1");
  each(afters, lambda_invoke);
}
