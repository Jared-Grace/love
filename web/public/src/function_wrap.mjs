import { js_statement_return } from "./js_statement_return.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { object_property_from } from "./object_property_from.mjs";
import { log } from "./log.mjs";
import { js_declaration_asyncify } from "./js_declaration_asyncify.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_add } from "./list_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export async function function_wrap(f_name, f_name_wrapped) {
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(f_name);
  await function_new_transform(f_name_wrapped, lambda);
  async function lambda(ast) {
    let arg_names = js_declaration_params_names(declaration_call);
    let code = js_code_call_args_await_maybe(
      unaliased,
      arg_names,
      declaration_call,
    );
    let body_block = js_declaration_single_block_blody(ast);
    let item = js_statement_return(code);
    list_add(body_block, item);
    let declaration = js_declaration_single(ast);
    js_declaration_asyncify(declaration, declaration_call);
    object_property_from(declaration, "params", declaration_call);
    js_imports_missing_add(ast);
  }
}
