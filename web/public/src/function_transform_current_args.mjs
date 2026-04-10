import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_transform_current_args(
  f_name_transformer,
  args,
) {
  js_identifier_rename(ast2, name_from, name_to);
  let imported_fn = await function_import_unalias(f_name_transformer);
  let f_name = await function_current_get();
  async function lambda(ast) {
    let result = await imported_fn(...args);
    return result;
  }
  await function_transform(f_name, lambda);
  return r;
}
