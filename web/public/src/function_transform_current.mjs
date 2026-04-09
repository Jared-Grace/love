import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current(lambda) {
  let r = await function_transform_current_fn(lambda);
  return r;
}
