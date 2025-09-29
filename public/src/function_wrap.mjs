import { js_statement_return } from "../../../love/public/src/js_statement_return.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { object_property_from } from "../../../love/public/src/object_property_from.mjs";
import { js_declaration_asyncify } from "../../../love/public/src/js_declaration_asyncify.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(f_name);
  let v = await function_new_transform(f_name_wrapped, lambda);
  return v;
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let code = js_code_call_args_await_maybe(
      unaliased,
      arg_names,
      declaration_call,
    );
    let body_block = js_declaration_single_block_body(ast);
    let item = js_statement_return(code);
    list_add(body_block, item);
    let declaration = js_declaration_single(ast);
    js_declaration_asyncify(declaration, declaration_call);
    object_property_from(declaration, "params", declaration_call);
    await js_imports_missing_add(ast);
  }
}
