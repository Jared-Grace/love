import { invoke } from "../../../love/public/src/invoke.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function list_invoke_unordered_async(nexts) {
  let r = await list_map_unordered_async(nexts, invoke);
  return r;
}
