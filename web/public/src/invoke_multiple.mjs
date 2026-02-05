import { invoke } from "../../../love/public/src/invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple(list_fns) {
  each(list_fns, invoke);
}
