import { js_identifier_rename_imports_fix_curried_right_2 } from "../../../love/public/src/js_identifier_rename_imports_fix_curried_right_2.mjs";
import { data_identifier_exists_if } from "../../../love/public/src/data_identifier_exists_if.mjs";
import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
export async function function_rename_identifiers(f_name_before, f_name_after) {
  await data_identifier_exists_if(f_name_before, on_exist);
  async function on_exist(f_names) {
    let r2 = await js_identifier_rename_imports_fix_curried_right_2(
      f_name_before,
      f_name_after,
    );
    list_remove_if_exists(f_names, f_name_before);
    await functions_transform_list(f_names, r2);
  }
}
