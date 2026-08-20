import { function_source_formatted_write } from "./function_source_formatted_write.mjs";
import { function_unalias_exists_not_assert_json } from "./function_unalias_exists_not_assert_json.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function function_new_declaration_from(declaration) {
  let f_name = js_function_declaration_name(declaration);
  await function_unalias_exists_not_assert_json(f_name, {
    hint: "a function with this name shouldn't already exist before creating it fresh — is it already defined?",
  });
  let code_declaration = js_unparse(declaration);
  let contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add_all(ast);
  let contents_import = js_unparse(ast);
  await function_source_formatted_write(f_name, contents_import);
}
