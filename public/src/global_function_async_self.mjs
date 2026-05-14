import { global_function_async } from "../../../love/public/src/global_function_async.mjs";
export async function global_function_async_self(fn, lambda) {
  let r = await global_function_async(fn, lambda);
  return r;
}
