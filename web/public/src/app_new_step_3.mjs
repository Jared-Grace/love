import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { firebase_storage_function_run } from "../../../love/public/src/firebase_storage_function_run.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
import { app_new_assign } from "../../../love/public/src/app_new_assign.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export async function app_new_step_3(name) {
  marker("1");
  string_and_empty_not_is_assert(name);
  let a_name = app_name_prefixed(name);
  let combined = app_name_main(name);
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    declaration.async = true;
    let expression2 = js_parse_expression(code_expression);
    let assign = js_declare(v, expression);
    app_new_assign(combined);
    let { parsed } = await js_call_new(firebase_storage_function_run.name, ast);
    let body_block = js_declaration_single_block_body(ast);
    list_add(body_block, assign);
    list_add(body_block, parsed);
  }
  let output = await function_transform(a_name, lambda);
}
