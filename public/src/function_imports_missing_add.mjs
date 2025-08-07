import { each } from "./each.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_add_first } from "./list_add_first.mjs";

export async function function_imports_missing_add(f_name) {
  let { imports_missing, parsed } = await function_imports_missing(f_name);
  let { body } = parsed;
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
}




