import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir } from "./import_from_dir.mjs";
import { function_name_to_path_import_code_relative } from "./function_name_to_path_import_code_relative.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
export async function function_imports_add(ast, imports) {
  let dictionary = await functions_names_to_paths();
  let from_dir = import_from_dir(ast, dictionary);
  let body = property_get(ast, "body");
  async function lambda(import_) {
    let code = function_name_to_path_import_code_relative(
      import_,
      dictionary,
      from_dir,
    );
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  await each_async(imports, lambda);
  return;
}
