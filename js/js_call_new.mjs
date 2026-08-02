import { not_equal } from "./not_equal.mjs";
import { js_call_new_code } from "./js_call_new_code.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
export async function js_call_new(f_name_call, ast) {
  let r = await js_call_new_code(f_name_call, ast);
  let declaration = property_get(r, "declaration");
  let existing = property_get(r, "existing");
  let return_name = property_get(r, "return_name");
  let code = property_get(r, "code");
  if (not_equal(return_name, null)) {
    let unique = js_identifier_unique(existing, return_name);
    code = js_code_let_assign(unique, code);
  }
  let parsed = js_parse_statement(code);
  let v = {
    parsed,
    async_is: property_get(declaration, "async"),
    declaration,
  };
  return v;
}
