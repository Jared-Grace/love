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
export async function functions_combine(f_names_comma) {
  let f_names = string_split_comma(f_names_comma);
  let waited = await list_map_unordered_async(f_names, function_name_unalias);
  let combined = function_name_combine_multiple(waited);
  async function lambda2(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    async function lambda(f_name) {
      let { declaration, unaliased } = await function_parse_declaration(f_name);
      let code = js_code_call_args_await_maybe(unaliased, [], declaration);
      let statement = js_parse_statement(code);
      let async_is = object_property_get(declaration, "async");
      js_function_last_asyncify(stack, async_is);
      list_add(body_block, statement);
    }
    await each_async(waited, lambda);
  }
  await function_new_transform(combined, lambda2);
}
