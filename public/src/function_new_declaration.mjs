import { file_write } from "./file_write.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
export async function function_new_declaration(declaration) {
  let name = js_declaration_name(declaration);
  const f_path = function_name_to_path(name);
  let code_declaration = await js_unparse(declaration);
  const contents = js_code_export(code_declaration);
  let ast = js_parse(contents);
  await js_imports_missing_add(ast);
  let contents_import = js_unparse(ast);
  await file_write(f_path, contents_import);
}
