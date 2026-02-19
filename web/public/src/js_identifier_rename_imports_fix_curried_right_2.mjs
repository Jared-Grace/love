import { js_identifier_rename_imports_fix } from "../../../love/public/src/js_identifier_rename_imports_fix.mjs";
export async function js_identifier_rename_imports_fix_curried_right_2(
  f_name_before,
  f_name_after,
) {
  return async function js_identifier_rename_imports_fix_curried_right_2_result(
    ast,
  ) {
    return await js_identifier_rename_imports_fix(
      ast,
      f_name_before,
      f_name_after,
    );
  };
}
