import { function_new_declaration } from "./function_new_declaration.mjs";
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
import { log } from "./log.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function function_new(f_name) {
  const code_declaration = js_code_declaration(f_name, "", false);
  let declaration = js_parse_statement_module(code_declaration);
  await function_new_declaration(declaration);
  await function_open(f_name);
}
