import { function_transform } from "../../love/js/function_transform.mjs";
import { js_statement_return_insert_code } from "../../love/js/js_statement_return_insert_code.mjs";
import { json_to } from "../../love/js/json_to.mjs";
import { list_empty } from "../../love/js/list_empty.mjs";
import { js_flo_body } from "../../love/js/js_flo_body.mjs";
import { function_new_open } from "../../love/js/function_new_open.mjs";
import { not } from "../../love/js/not.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { function_unalias_exists } from "../../love/js/function_unalias_exists.mjs";
import { text_suffix_without } from "../../love/js/text_suffix_without.mjs";
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
    js_statement_return_insert_code(body_block, 0, code);
  }
  let output = await function_transform(f_name, lambda);
  return f_name;
}
