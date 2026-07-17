import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { function_name_to_path_import_code_at } from "./function_name_to_path_import_code_at.mjs";
export function function_imports_add_at(ast, imports, base_dir) {
  arguments_assert(arguments, 3);
  let body = property_get(ast, "body");
  function lambda(import_) {
    let code = function_name_to_path_import_code_at(import_, base_dir);
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  let reversed = list_copy_reverse(imports);
  each(reversed, lambda);
}
