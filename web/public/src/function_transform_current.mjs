import { function_transform } from "./function_transform.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function function_transform_current(lambda) {
  let f_name = await data_function_current_get();
  await function_transform(f_name, lambda);
}
