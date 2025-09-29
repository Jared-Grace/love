import { repo_path_combine } from "../../../love/public/src/repo_path_combine.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { js_format } from "../../../love/public/src/js_format.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { js_code_export } from "../../../love/public/src/js_code_export.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { js_declaration_name } from "../../../love/public/src/js_declaration_name.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
export async function function_new_declaration(declaration) {
  let name = js_declaration_name(declaration);
  const f_path = function_name_to_path(name);
  let code_declaration = js_unparse(declaration);
  const contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add(ast);
  let contents_import = js_unparse(ast);
  let formatted = await js_format(contents_import);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await file_write(combined, formatted);
}
