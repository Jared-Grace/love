import { function_transform } from "./function_transform.mjs";
export async function function_transform_fn(fn, lambda) {
  let r = await function_transform(fn.name, lambda);
  return r;
}
