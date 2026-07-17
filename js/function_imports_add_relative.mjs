import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_import_code_relative } from "./function_name_to_path_import_code_relative.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
export async function function_imports_add_relative(
  ast,
  imports,
  dictionary,
  from_dir,
) {
  arguments_assert(arguments, 4);
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
  let reversed = list_copy_reverse(imports);
  await each_async(reversed, lambda);
}
