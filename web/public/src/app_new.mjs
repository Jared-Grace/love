import { js_call_new } from "./js_call_new.mjs";
import { firebase_storage_function_run } from "./firebase_storage_function_run.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { js_declare } from "./js_declare.mjs";
import { function_transform } from "./function_transform.mjs";
import { app_name_main } from "./app_name_main.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_new } from "./function_new.mjs";
import { html_new } from "./html_new.mjs";
import { marker } from "./marker.mjs";
export async function app_new(name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  let combined = app_name_main(name);
  await function_new(a_name);
  async function lambda(ast) {
    const v = "f_name";
    let code = js_code_dot(combined, "name");
    let expression = js_parse_expression(code);
    let assign = js_declare(v, expression);
    let body_block = js_declaration_single_block_body(ast);
    list_add(body_block, assign);
    let expression2 = await js_call_new(
      firebase_storage_function_run.name,
      ast,
    );
  }
  let output = await function_transform(a_name, lambda);
  await function_new(combined);
  await html_new(name);
}
