import { js_return_atomize } from "./js_return_atomize.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration_unaliased } from "./function_parse_declaration_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_asyncify_params_from } from "./js_function_declaration_asyncify_params_from.mjs";
import { js_call_args_await_maybe_declaration_return_add } from "./js_call_args_await_maybe_declaration_return_add.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { function_new_open_transform } from "./function_new_open_transform.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  arguments_assert(arguments, 2);
  let r = await function_parse_declaration_unaliased(f_name);
  let unaliased = property_get(r, "unaliased");
  let declaration_call = property_get(r, "declaration");
  let v = await function_new_open_transform(f_name_wrapped, lambda);
  return v;
  async function lambda(ast) {
    let arg_names = js_function_declaration_params_names(declaration_call);
    js_call_args_await_maybe_declaration_return_add(
      unaliased,
      arg_names,
      declaration_call,
      ast,
    );
    await js_function_declaration_asyncify_params_from(ast, declaration_call);
    await js_return_atomize(ast);
  }
}
