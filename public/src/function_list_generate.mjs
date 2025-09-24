import { string_suffix_without } from "./string_suffix_without.mjs";
import { function_open } from "./function_open.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_statement_return_add } from "./js_statement_return_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty } from "./list_empty.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { function_new } from "./function_new.mjs";
import { not } from "./not.mjs";
import { function_exists } from "./function_exists.mjs";
export async function function_list_generate(f_generate, list) {
  let f_generate_name = f_generate.name;
  let f_name = string_suffix_without(f_generate_name, "_generate");
  let { exists } = await function_exists(f_name);
  if (not(exists)) {
    await function_new(f_name);
  }
  async function lambda3(ast) {
    let body_block = js_declaration_single_block_body(ast);
    list_empty(body_block);
    let code = json_to(list);
    let expression = js_parse_expression(code);
    js_statement_return_add(expression, body_block);
  }
  let output = await function_transform(f_name, lambda3);
  await function_open(f_name);
}
