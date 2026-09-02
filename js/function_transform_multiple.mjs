import { text_split_comma_dot_map_unordered } from "./text_split_comma_dot_map_unordered.mjs";
import { function_transform_single } from "./function_transform_single.mjs";
export async function function_transform_multiple(
  f_name_transformer_args_comma,
  f_names_comma,
) {
  "Runs one named transform over several functions at once, so a change of the same shape is made in one command rather than repeated by hand.";
  async function lambda(f_name) {
    await function_transform_single(f_name_transformer_args_comma, f_name);
  }
  await text_split_comma_dot_map_unordered(f_names_comma, lambda);
}
