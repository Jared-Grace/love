import { log } from "../../../love/public/src/log.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
export function invoke_multiple(list_fns) {
  let mapped = list_map(list_fns, invoke);
  log({
    list_fns,
  });
  return mapped;
}
