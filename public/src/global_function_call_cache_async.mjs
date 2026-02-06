import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export async function global_function_call_cache_async(args1, fn, get) {
  let args = list_to(args1);
  let json = json_to(args);
  let value = await global_function_property_initialize_async(fn, json, get);
  return value;
}
