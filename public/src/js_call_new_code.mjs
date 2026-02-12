import { js_declaration } from "../../../love/public/src/js_declaration.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_return_name } from "../../../love/public/src/js_return_name.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_declaration_param_add } from "../../../love/public/src/js_declaration_param_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
export async function js_call_new_code(f_name_call, ast) {
  let r = await function_parse_declaration(f_name_call);
  let ast_call = property_get(r, "ast");
  let declaration = property_get(r, "declaration");
  let existing = js_identifiers_names(ast);
  let arg_names = js_declaration_params_names(declaration);
  async function lambda3(arg_name) {
    let arg_code = await js_identifier_unique(existing, arg_name);
    let split = text_split(arg_name, "$");
    const lambda = "lambda";
    if (list_first(split) === lambda) {
      let skip_count = 1;
      let b = list_size(split);
      let remaining = list_slice(split, skip_count, b);
      let lamda_name = await js_identifier_unique(existing, lambda);
      let declaration_lambda = js_declaration(declaration, lamda_name);
      async function lambda2(p) {
        let unique = await js_identifier_unique(existing, p);
        js_declaration_param_add(declaration_lambda, unique);
      }
      await each_async(remaining, lambda2);
      arg_code = js_unparse(declaration_lambda);
    }
    return arg_code;
  }
  let args_code = await list_map_unordered_async(arg_names, lambda3);
  let code = js_code_call_args_await_maybe(f_name_call, args_code, declaration);
  let return_name = js_return_name(ast_call);
  let v = {
    code,
    return_name,
    existing,
    declaration,
  };
  return v;
}
