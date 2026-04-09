import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_fn_args(lambda, args) {
  function lambda2() {}
  let r = await function_transform_current_fn(lambda2);
  return r;
}
