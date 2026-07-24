import { js_imports_paths_fix } from "./js_imports_paths_fix.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_imports_dedupe } from "./js_imports_dedupe.mjs";
export async function js_identifier_rename_imports_fix(
  ast,
  f_name_before,
  f_name_after,
) {
  js_identifier_rename(ast, f_name_before, f_name_after);
  js_imports_dedupe(ast);
  await js_imports_paths_fix(ast);
}
