import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { function_name_to_path_import } from "../../../love/public/src/function_name_to_path_import.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
export async function function_imports_add(ast, imports) {
  let dictionary = await functions_names_to_paths();
  let body = property_get(ast, "body");
  async function lambda(import_) {
    const from = function_name_to_path_import(import_, dictionary);
    let code = js_code_import_single(import_, from);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
  return;
  text_is_assert(value);
}
