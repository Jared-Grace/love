import { marker } from "../../../love/public/src/marker.mjs";
import { lambda_invoke } from "../../../love/public/src/lambda_invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple(list_fns) {
  marker("1");
  each(list_fns, lambda_invoke);
}
