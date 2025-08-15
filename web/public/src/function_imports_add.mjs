import js_code_wrap_braces from "./js_code_wrap_braces.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { each } from "./each.mjs";
export function function_imports_add(ast, imports) {
  let { body } = ast;
  function lambda(import_) {
    let code =
      js_keyword_import() +
      " " +
      import_ +
      " from " +
      "'./" +
      function_name_to_base(import_) +
      "'";
    let statement = js_parse_statement_module(code);
    list_add_first(body, statement);
  }
  each(imports, lambda);
  return;
  [js_code_wrap_braces];
}
