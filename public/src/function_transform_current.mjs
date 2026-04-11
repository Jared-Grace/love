import { list_first_remaining_from_comma_dot } from "../../../love/public/src/list_first_remaining_from_comma_dot.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_transform_current(
  f_name_transformer_args_comma,
) {
  let f_name = await function_current_get();
  let fr = list_first_remaining_from_comma_dot(f_name_transformer_args_comma);
  let remaining = property_get(fr, "remaining");
  let f_name_transformer = property_get(fr, "first");
  let imported_fn = await function_import_unalias(f_name_transformer);
  async function lambda(ast) {
    let result = await imported_fn(ast, ...remaining);
    return result;
  }
  await function_transform(f_name, lambda);
  return r;
}
