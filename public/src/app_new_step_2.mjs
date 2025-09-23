import { js_declaration_single } from "./js_declaration_single.mjs";
import { html_new } from "./html_new.mjs";
import { function_new } from "./function_new.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { firebase_storage_function_run } from "./firebase_storage_function_run.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { app_new_assign } from "./app_new_assign.mjs";
import { app_name_main } from "./app_name_main.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
export async function app_new_step_2(name) {
  let a_name = app_name_prefixed(name);
  let combined = app_name_main(name);
  async function lambda(ast) {
    let declaration = js_declaration_single(ast2);
    let assign = app_new_assign(combined);
    let { parsed } = await js_call_new(firebase_storage_function_run.name, ast);
    let p = parsed;
    let body_block = js_declaration_single_block_body(ast);
    list_add(body_block, assign);
    list_add(body_block, p);
  }
  let output = await function_transform(a_name, lambda);
  await function_new(combined);
  await html_new(name);
}
