import { text_suffix_without } from "./text_suffix_without.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_prose_is } from "./js_statement_prose_is.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { js_statement_return_insert_code } from "./js_statement_return_insert_code.mjs";
import { list_size } from "./list_size.mjs";
import { function_transform } from "./function_transform.mjs";
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
    ("The list is what gets written out again, not what the function says about itself: a granted list has to keep its sentence, and clearing the whole body took it off on every run, which turned a gate red with nothing wrong in the list.");
    let prose = list_filter(body_block, js_statement_prose_is);
    list_clear(body_block);
    list_add_multiple(body_block, prose);
    let code = json_to(list);
    let index = list_size(prose);
    js_statement_return_insert_code(body_block, index, code);
  }
  await function_transform(f_name, lambda);
  return f_name;
}
