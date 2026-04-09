import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_fn_args(lambda, args) {
  let lambda2 = function lambda3() {
    let r2 = lambda(args);
    return r2;
  };
  let r = await function_transform_current_fn(lambda2);
  return r;
}
