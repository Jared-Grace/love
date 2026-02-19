import { invoke } from "../../../love/public/src/invoke.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "./list_map.mjs";
export function invoke_multiple(list_fns) {
  $r,list_map(list_fns, invoke);
}
