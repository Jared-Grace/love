import { list_size_1_assert } from "./list_size_1_assert.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
import { list_size } from "./list_size.mjs";
import { log } from "./log.mjs";
import { js_auto } from "./js_auto.mjs";
import { js_visit_match } from "./js_visit_match.mjs";
import { functions_combine_name } from "./functions_combine_name.mjs";
import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { each_async } from "./each_async.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_split } from "./string_split.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function functions_combine(f_names_comma) {
  let list = list_to(arguments);
  list_size_1_assert(list);
  let { f_names, combined } = await functions_combine_name(f_names_comma);
  async function lambda2(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    async function lambda(f_name) {
      let item = js_parse_expression(f_name);
      list_add(body_block, item);
    }
    await each_async(f_names, lambda);
    await js_auto(ast);
  }
  await function_new_transform(combined, lambda2);
}
