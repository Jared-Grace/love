import { function_parse_declaration_unaliased } from "./function_parse_declaration_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty } from "./list_empty.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { firebase_name_repo } from "./firebase_name_repo.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
export async function app_shared_update_generic(
  name,
  fn_call,
  f_name_transformed,
) {
  text_and_empty_not_is_assert_json(name, {
    hint: "the app name should be non-empty text — was it blank?",
  });
  let a_name = app_shared_name_prefixed(name);
  let v = await function_name_to_path_search(a_name);
  let repo_name = property_get(v, "repo_name");
  let default2 = await firebase_name_repo(repo_name);
  let f_name = js_code_string(default2);
  let call_name = fn_call.name;
  let v2 = await function_parse_declaration_unaliased(call_name);
  let unaliased = property_get(v2, "unaliased");
  let declaration_call = property_get(v2, "declaration");
  async function lambda(ast) {
    let declaration = js_flo(ast);
    declaration.async = true;
    let value_string = await app_shared_name_main(name);
    let main_name = js_code_string(value_string);
    let code = js_code_call_args_await_maybe(
      unaliased,
      [main_name, f_name],
      declaration_call,
    );
    let statement = js_parse_statement(code);
    let body_block = js_flo_body(ast);
    list_empty(body_block);
    list_add(body_block, statement);
  }
  let output = await function_transform(f_name_transformed, lambda);
}
