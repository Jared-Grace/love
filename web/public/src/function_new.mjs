import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_code_declaration } from "./js_code_declaration.mjs";
import { file_write } from "./file_write.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { function_open } from "./function_open.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_open } from "./file_open.mjs";
export async function function_new(f_name) {
  const code_declaration = js_code_declaration(f_name, "", false);
  let declaration = js_parse_expression(code_declaration);
  let name = js_declaration_name(declaration);
  const f_path = function_name_to_path(name);
  const contents = js_code_export(code_declaration);
  await file_write(f_path, contents);
  await function_open(name);
}
