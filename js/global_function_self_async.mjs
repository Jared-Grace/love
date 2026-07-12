import { global_function_async } from "./global_function_async.mjs";
export async function global_function_self_async(fn) {
  let r = await global_function_async(fn, fn);
  return r;
}
