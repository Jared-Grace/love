import { each_async } from "./each_async.mjs";
export async function invoke_multiple_args_async(list_fns, args) {
  async function lambda_each(fn) {
    await fn(...args);
  }
  await each_async(list_fns, lambda_each);
}
