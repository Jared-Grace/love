import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { app_main } from "../../../love/public/src/app_main.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { firebase_name_repo } from "../../../love/public/src/firebase_name_repo.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new_step_3_generic(
  name,
  version_get,
  f_name_transformed,
) {
  marker("1");
  string_and_empty_not_is_assert(name);
  let a_name = app_name_prefixed(name);
  let { repo_name } = await function_name_to_path_search(a_name);
  let default2 = await firebase_name_repo(repo_name);
  let f_name = js_code_string(default2);
  let call_name = app_main.name;
  let { declaration: declaration_call, unaliased } =
    await function_parse_declaration(call_name);
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    declaration.async = true;
    let value_string = app_name_main(name);
    let main_name = js_code_string(value_string);
    let code = js_code_call_args_await_maybe(
      unaliased,
      [main_name, f_name, version_get],
      declaration_call,
    );
    let statement = js_parse_statement(code);
    let body_block = js_declaration_single_block_body(ast);
    list_empty(body_block);
    list_add(body_block, statement);
  }
  let output = await function_transform(f_name_transformed, lambda);
}
