import { js_imports_paths_fix } from "../../../love/public/src/js_imports_paths_fix.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
export async function js_identifier_rename_imports_fix(
  ast,
  f_name_before,
  f_name_after,
) {
  js_identifier_rename(ast, f_name_before, f_name_after);
  await js_imports_paths_fix(ast);
}
