import { invoke } from "../../../love/public/src/invoke.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function invoke_multiple_async(afters) {
  let r = await list_map_async(afters, invoke);
  return r;
}
