import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { property_exists_if_async } from "../../../love/public/src/property_exists_if_async.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
import { data_identifiers_fn_names_get } from "../../../love/public/src/data_identifiers_fn_names_get.mjs";
export async function function_rename_fn_names_check(f_name_before) {
  let i = await data_identifiers_fn_names_get();
  async function lambda(value) {
    function lambda3() {}
    let waited = await functions_transform_list(value, lambda3);
    error_json({
      message:
        "You are trying to rename: " +
        f_name_before +
        ". However that is referenced by " +
        value +
        " through " +
        fn_name.name +
        ". TODO: " +
        function_rename_open.name +
        " needs enhancing to rename " +
        fn_name.name +
        " references.",
      f_name_before,
      value,
    });
  }
  await property_exists_if_async(i, f_name_before, lambda);
  return;
  async function lambda2(ast) {}
}
