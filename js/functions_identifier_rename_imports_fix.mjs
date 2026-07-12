import { functions_transform_list } from "./functions_transform_list.mjs";
import { js_identifier_rename_imports_fix_curried_right_2 } from "./js_identifier_rename_imports_fix_curried_right_2.mjs";
export async function functions_identifier_rename_imports_fix(
  f_names,
  f_name_before,
  f_name_after,
) {
  let r = await js_identifier_rename_imports_fix_curried_right_2(
    f_name_before,
    f_name_after,
  );
  await functions_transform_list(f_names, r);
}
