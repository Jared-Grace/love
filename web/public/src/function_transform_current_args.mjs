import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_transform_current_args(
  f_name_transformer_args_comma,
) {
  let r2 = list_first_remaining(list);
  let args = text_split_comma_dot(args_comma);
  let imported_fn = await function_import_unalias(
    f_name_transformer_args_comma,
  );
  let f_name = await function_current_get();
  async function lambda(ast) {
    let result = await imported_fn(ast, ...args);
    return result;
  }
  await function_transform(f_name, lambda);
  return r;
}
