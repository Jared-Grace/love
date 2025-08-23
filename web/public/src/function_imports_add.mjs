import { function_name_to_path_import } from "./function_name_to_path_import.mjs";
import { each_async } from "./each_async.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
export async function function_imports_add(ast, imports) {
  let { body } = ast;
  async function lambda(import_) {
    const from = function_name_to_path_import(import_);
    let code = js_code_import_single(import_, from);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
}
