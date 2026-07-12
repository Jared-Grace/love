import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { json_to } from "./json_to.mjs";
import { list_to } from "./list_to.mjs";
export async function global_function_call_cache_async(fn, args, lambda) {
  let args_list = list_to(args);
  let json = json_to(args_list);
  let value = await global_function_property_initialize_async(fn, json, lambda);
  return value;
}
