import { js_statement_return_insert_code } from "./js_statement_return_insert_code.mjs";
import { property_get } from "./property_get.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { function_open } from "./function_open.mjs";
import { function_transform } from "./function_transform.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty } from "./list_empty.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { not } from "./not.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
export async function function_list_generate(f_generate, list) {
  let f_generate_name = f_generate.name;
  let f_name = text_suffix_without(f_generate_name, "_generate");
  let v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  if (not(exists)) {
    await function_new_open(f_name);
  }
  async function lambda(ast) {
    let body_block = js_flo_body(ast);
    list_empty(body_block);
    let code = json_to(list);
    js_statement_return_insert_code(body_block, index, code);
  }
  let output = await function_transform(f_name, lambda);
  await function_open(f_name);
}
