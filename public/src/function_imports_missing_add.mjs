import { function_unparse } from "./function_unparse.mjs";
import { each } from "./each.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_imports_missing_add(f_name) {
  let { imports_missing, ast } = await function_imports_missing(f_name);
  let { body } = ast;
  each(imports_missing, (import_missing) => {
    let code =
      "import { " +
      import_missing +
      " } from './" +
      function_name_to_base(import_missing) +
      "'";
    let statement = js_parse_statement(code);
    list_add_first(body, statement);
  });
  await function_unparse(f_name, ast);
}
