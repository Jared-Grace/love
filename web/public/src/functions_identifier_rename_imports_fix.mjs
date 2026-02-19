import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { js_identifier_rename_imports_fix_curried_right_2 } from "../../../love/public/src/js_identifier_rename_imports_fix_curried_right_2.mjs";
export async function functions_identifier_rename_imports_fix(
  f_name_before,
  f_name_after,
  f_names,
) {
  let r2 = await js_identifier_rename_imports_fix_curried_right_2(
    f_name_before,
    f_name_after,
  );
  await functions_transform_list(f_names, r2);
}
