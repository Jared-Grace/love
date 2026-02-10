import { js_statement_return_insert_code } from "../../../love/public/src/js_statement_return_insert_code.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
export async function function_list_generate(f_generate, list) {
  let f_generate_name = f_generate.name;
  let f_name = text_suffix_without(f_generate_name, "_generate");
  let v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  if (not(exists)) {
    await function_new(f_name);
  }
  async function lambda3(ast) {
    let body_block = js_declaration_single_block_body(ast);
    list_empty(body_block);
    let code = json_to(list);
    js_statement_return_insert_code(body_block, index, code);
  }
  let output = await function_transform(f_name, lambda3);
  await function_open(f_name);
}
