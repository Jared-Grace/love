import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { property_from } from "../../../love/public/src/property_from.mjs";
import { js_declaration_asyncify } from "../../../love/public/src/js_declaration_asyncify.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { js_declaration_single_block_body_add } from "../../../love/public/src/js_declaration_single_block_body_add.mjs";
import { js_call_args_await_maybe_return } from "../../../love/public/src/js_call_args_await_maybe_return.mjs";
import { function_parse_declaration_unaliased } from "../../../love/public/src/function_parse_declaration_unaliased.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_curryify(f_name) {
  let r = await function_parse_declaration_unaliased(f_name);
  let unaliased = property_get(r, "unaliased");
  let declaration_call = property_get(r, "declaration");
  let v = await function_new_transform(f_name_wrapped, lambda);
  return v;
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let result = list_first_remaining(list);
    let item = js_call_args_await_maybe_return(
      unaliased,
      arg_names,
      declaration_call,
    );
    js_declaration_single_block_body_add(ast, item);
    let declaration = js_declaration_single(ast);
    js_declaration_asyncify(declaration, declaration_call);
    property_from(declaration, "params", declaration_call);
    await js_imports_missing_add(ast);
  }
}
