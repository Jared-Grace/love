import { function_unalias_exists_not_assert_json } from "./function_unalias_exists_not_assert_json.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { js_format } from "./js_format.mjs";
import { file_write } from "./file_write.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export async function function_new_declaration_from(declaration) {
  let f_name = js_function_declaration_name(declaration);
  await function_unalias_exists_not_assert_json(f_name, {
    hint: "a function with this name shouldn't already exist before creating it fresh — is it already defined?",
  });
  let f_path = function_name_to_path(f_name);
  let code_declaration = js_unparse(declaration);
  let contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add_all(ast);
  let contents_import = js_unparse(ast);
  let formatted = await js_format(contents_import);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await file_write(combined, formatted);
  await data_file_update(combined);
}
