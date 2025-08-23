import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { each_async } from "./each_async.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
export async function function_imports_add(ast, imports) {
  let { body } = ast;
  async function lambda(import_) {
    let f_name_ext = function_name_to_base(import_);
    const from = folder_current_join_code(f_name_ext);
    let code = js_code_import_single(import_, from);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
}
