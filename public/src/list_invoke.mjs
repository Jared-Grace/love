import { invoke } from "../../../love/public/src/invoke.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_invoke(taken) {
  let mapped4 = list_map(taken, invoke);
  return mapped4;
}
