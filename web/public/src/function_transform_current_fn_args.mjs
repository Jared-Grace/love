import { invoke_later } from "../../../love/public/src/invoke_later.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_fn_args(lambda, args) {
  let later = invoke_later(lambda, args);
  let r = await function_transform_current_fn(later);
  return r;
}
