import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_fn_args(lambda, args) {
  let r = await function_transform_current_fn(() => {});
  return r;
}
