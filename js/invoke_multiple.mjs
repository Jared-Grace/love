import { list_map } from "./list_map.mjs";
import { invoke } from "./invoke.mjs";
export function invoke_multiple(list_fns) {
  let mapped = list_map(list_fns, invoke);
  return mapped;
}
