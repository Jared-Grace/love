import { js_identifier_rename_imports_fix } from "../../../love/public/src/js_identifier_rename_imports_fix.mjs";
export async function js_identifier_rename_imports_fix_curried_right_2(
  f_name_before,
  f_name_after,
) {
  let r2 =
    async function js_identifier_rename_imports_fix_curried_right_2_result(
      ast,
    ) {
      let r = await js_identifier_rename_imports_fix(
        ast,
        f_name_before,
        f_name_after,
      );
      return r;
    };
  return r2;
}
