import { override_get } from "../../../love/public/src/override_get.mjs";
import { function_name_new_get_generic_overrides } from "../../../love/public/src/function_name_new_get_generic_overrides.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining_from_comma_dot } from "../../../love/public/src/list_first_remaining_from_comma_dot.mjs";
export async function function_transform_single(
  f_name_transformer_args_comma,
  f_name,
) {
  let fr = list_first_remaining_from_comma_dot(f_name_transformer_args_comma);
  let remaining = property_get(fr, "remaining");
  let f_name_transformer = property_get(fr, "first");
  f_name_transformer = override_get(
    overrides,
    function_name_new_get_generic_overrides,
  );
  let imported_fn = await function_import_unalias(f_name_transformer);
  async function lambda(ast) {
    let result = await imported_fn(ast, ...remaining);
    return result;
  }
  await function_transform(f_name, lambda);
}
