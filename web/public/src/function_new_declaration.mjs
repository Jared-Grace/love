import { file_write } from "./file_write.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
export async function function_new_declaration(declaration) {
  let name = js_declaration_name(declaration);
  const f_path = function_name_to_path(name);
  let code_declaration = js_unparse(declaration);
  const contents = js_code_export(code_declaration);
  await file_write(f_path, contents);
}
