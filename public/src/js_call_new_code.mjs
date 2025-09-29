import { js_return_name } from "../../../love/public/src/js_return_name.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_declaration_param_add } from "../../../love/public/src/js_declaration_param_add.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
export async function js_call_new_code(f_name_call, ast) {
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
  let return_name = js_return_name(ast_call);
  let v = {
    code,
    return_name,
    existing,
    declaration,
  };
  return v;
}
