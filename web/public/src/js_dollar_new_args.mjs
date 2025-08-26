import { function_transform } from "./function_transform.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let combined = js_dollar_new_name(code);
  async function lambda2(ast) {
    let r = js_statement_return_empty();
    let body_block = js_declaration_single_block_body(ast);
    list_add(body_block, r);
  }
  await function_transform(combined, lambda2);
  let output = await function_transform(f_name, async function lambda(ast2) {});
  marker("1");
}
