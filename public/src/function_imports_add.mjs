import { each_async } from "./each_async.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { folder_current_join } from "./folder_current_join.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
export async function function_imports_add(ast, imports) {
  let { body } = ast;
  async function lambda(import_) {
    let result = function_name_to_base(import_);
    let value_string = folder_current_join(result);
    const from = await js_code_string(value_string);
    let code = js_code_import_single(import_, from);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
}
