import { js_call_new_code } from "./js_call_new_code.mjs";
import { marker } from "./marker.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { each } from "./each.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_code_declaration } from "./js_code_declaration.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { string_split } from "./string_split.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { list_map } from "./list_map.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
export async function js_call_new(f_name_call, ast) {
  marker("1");
  await js_call_new_code(f_name_call, ast, lambda3, lambda2);
  marker("2");
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
