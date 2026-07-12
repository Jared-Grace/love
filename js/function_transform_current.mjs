import { function_transform_single } from "./function_transform_single.mjs";
import { function_current_get } from "./function_current_get.mjs";
export async function function_transform_current(
  f_name_transformer_args_comma,
) {
  let f_name = await function_current_get();
  await function_transform_single(f_name_transformer_args_comma, f_name);
}
