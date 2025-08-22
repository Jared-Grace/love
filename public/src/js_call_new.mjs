import { js_call_new_code } from "./js_call_new_code.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
export async function js_call_new(f_name_call, ast) {
  let { code, return_name, existing, declaration } = await js_call_new_code(
    f_name_call,
    ast,
  );
  if (return_name !== null) {
    let unique = js_identifier_unique(existing, return_name);
    code = js_code_let_assign(unique, code);
  }
  let parsed = js_parse_statement(code);
  let v = {
    parsed,
    async_is: object_property_get(declaration, "async"),
    declaration,
  };
  return v;
}
