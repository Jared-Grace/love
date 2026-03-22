import { invoke_multiple_args_async } from "../../../love/public/src/invoke_multiple_args_async.mjs";
export async function invoke_multiple_arg_async(list_fns, arg) {
  let r = await invoke_multiple_args_async(list_fns, [arg]);
  return r;
}
