import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
export async function invoke_multiple_unordered_async(fns) {
  let r = await list_map_unordered_async(fns, invoke);
  return r;
}
