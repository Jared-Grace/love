import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_flo_body_add_first } from "./js_flo_body_add_first.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
export function js_call_generalize(ast, name_identifier, name_generalized) {
  arguments_assert(arguments, 3);
  ("we do not want to rename the import, so rename declaration, not ast");
  let declaration = js_flo(ast);
  js_identifier_rename(declaration, name_identifier, name_generalized);
  let expression = js_parse_expression(name_identifier);
  let declare = js_declare(name_generalized, expression);
  js_flo_body_add_first(ast, declare);
}
