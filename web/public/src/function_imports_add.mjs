import { function_name_to_path_import_code_multiple_map } from "../../../love/public/src/function_name_to_path_import_code_multiple_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
export async function function_imports_add(ast, imports) {
  let mapped = await function_name_to_path_import_code_multiple_map(imports);
  let body = property_get(ast, "body");
  async function lambda(code) {
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(mapped, lambda);
  return;
}
