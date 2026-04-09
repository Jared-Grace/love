import { function_is } from "../../../love/public/src/function_is.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current(lambda) {
  let fi2 = function_is(f);
  let r = await function_transform_current_fn(lambda);
  return r;
}
