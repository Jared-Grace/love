import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { function_name_to_path_import } from "./function_name_to_path_import.mjs";
import { each_async } from "./each_async.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
export async function function_imports_add(ast, imports) {
  let dictionary = await functions_names_to_paths();
  let { body } = ast;
  async function lambda(import_) {
    const from = function_name_to_path_import(import_, dictionary);
    let code = js_code_import_single(import_, from);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
  return;
}
