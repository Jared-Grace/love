import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function function_transform_current_fn(lambda) {
  let f_name = await function_current_get();
  await function_transform(f_name, lambda);
}
