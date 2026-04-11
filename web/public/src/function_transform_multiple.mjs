import { text_split_comma_dot_map_unordered } from "../../../love/public/src/text_split_comma_dot_map_unordered.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform_single } from "../../../love/public/src/function_transform_single.mjs";
export async function function_transform_multiple(
  f_name_transformer_args_comma,
  f_name,
) {
  async function lambda3() {}
  await text_split_comma_dot_map_unordered(f_names_comma, lambda3);
  async function lambda(item) {}
  await each_async(list, lambda);
  let r = await function_transform_single(
    f_name_transformer_args_comma,
    f_name,
  );
  return r;
}
