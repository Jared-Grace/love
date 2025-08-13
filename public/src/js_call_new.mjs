import { function_name_unalias } from "./function_name_unalias.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
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
  let {
    declaration,
    unaliased,
    ast: ast_call,
  } = await function_parse_declaration(f_name_call);
  let existing = js_identifiers_names(ast);
  let arg_names = js_declaration_params_names(declaration);
  async function lambda3(arg_name) {
    let arg_code = js_identifier_unique(existing, arg_name);
    let split = string_split(arg_name, "$");
    const lambda = "lambda";
    if (list_first(split) === lambda) {
      let skip_count = 1;
      let b = list_size(split);
      let remaining = list_slice(split, skip_count, b);
      let lamda_name = js_identifier_unique(existing, lambda);
      let async_is = object_property_get(declaration, "async");
      let code = js_code_declaration(lamda_name, "", async_is);
      let declaration_lambda = js_parse_statement_module(code);
      function lambda2(p) {
        let unique = js_identifier_unique(existing, p);
        js_declaration_param_add(declaration_lambda, unique);
      }
      each(remaining, lambda2);
      arg_code = await js_unparse(declaration_lambda);
    }
    return arg_code;
  }
  let args_code = await list_map_unordered_async(arg_names, lambda3);
  let code = js_code_call_args_await_maybe(unaliased, args_code, declaration);
  let body_block = js_return_name(ast_call);
  if (body_block !== null) {
    let unique = js_identifier_unique(existing, body_block);
    code = js_code_let_assign(unique, code);
  }
  let parsed = js_parse_statement(code);
  return {
    parsed,
  };
}
