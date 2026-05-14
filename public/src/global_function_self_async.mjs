import { global_function_async_self } from "../../../love/public/src/global_function_async_self.mjs";
export async function global_function_self_async(fn) {
  let r = await global_function_async_self(fn);
  return r;
}
