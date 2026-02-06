import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export async function global_function_call_cache_async(fn, args, get) {
  let args_list = list_to(args);
  let json = json_to(args_list);
  let value = await global_function_property_initialize_async(fn, json, get);
  return value;
}
