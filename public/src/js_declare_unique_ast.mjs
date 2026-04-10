import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
export function js_declare_unique_ast(ast, variable_name, init) {
  let unique = js_identifier_unique_ast(ast, variable_name);
  let declare = js_declare(unique, init);
  let r = {
    declare,
    unique,
  };
  return r;
}
