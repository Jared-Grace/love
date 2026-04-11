import { text_split_comma_dot_map_unordered } from "../../../love/public/src/text_split_comma_dot_map_unordered.mjs";
import { function_transform_single } from "../../../love/public/src/function_transform_single.mjs";
export async function function_transform_multiple(
  f_name_transformer_args_comma,
  f_names_comma,
) {
  async function lambda3(f_name) {
    await function_transform_single(f_name_transformer_args_comma, f_name);
  }
  await text_split_comma_dot_map_unordered(f_names_comma, lambda3);
}
