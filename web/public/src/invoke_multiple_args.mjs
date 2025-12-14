import { marker } from "../../../love/public/src/marker.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args(list_fns) {
  marker("1");
  each(list_fns, invoke);
}
