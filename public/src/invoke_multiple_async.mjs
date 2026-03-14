import { invoke } from "../../../love/public/src/invoke.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function invoke_multiple_async(fns) {
  let r = await list_map_async(fns, invoke);
  return r;
}
