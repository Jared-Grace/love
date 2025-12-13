import { marker } from "../../../love/public/src/marker.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { js_statement_return } from "../../../love/public/src/js_statement_return.mjs";
import { object_property_from } from "../../../love/public/src/object_property_from.mjs";
import { js_declaration_asyncify } from "../../../love/public/src/js_declaration_asyncify.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  marker("1");
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(f_name);
  let v = await function_new_transform(f_name_wrapped, lambda);
  return v;
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let return_argument_code = js_code_call_args_await_maybe(
      unaliased,
      arg_names,
      declaration_call,
    );
    let item = js_statement_return(return_argument_code);
    js_declaration_single_block_body_add(ast, item);
    let declaration = js_declaration_single(ast);
    js_declaration_asyncify(declaration, declaration_call);
    object_property_from(declaration, "params", declaration_call);
    await js_imports_missing_add(ast);
  }
}
