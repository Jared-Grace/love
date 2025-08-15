import { js_call_new } from "./js_call_new.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_stack_declaration_asyncify } from "./js_stack_declaration_asyncify.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { js_code_declaration } from "./js_code_declaration.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { string_split } from "./string_split.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_last } from "./list_last.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { json_to } from "./json_to.mjs";
import { log } from "./log.mjs";
import { list_insert } from "./list_insert.mjs";
import { assert_not } from "./assert_not.mjs";
import { list_map } from "./list_map.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { marker } from "./marker.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_first } from "./list_first.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { each } from "./each.mjs";
export async function marker_call(f_name_call) {
  let f_name_current = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name_current, lambda);
    async function lambda(a) {
      marker("1");
      let { stack, stack2, index, ast } = marker_next_index(a);
      let { declaration, parsed } = await js_call_new(f_name_call, ast);
      marker("2");
      list_insert(stack2, index, parsed);
      await js_imports_missing_add(ast);
      let output = await js_unparse(parsed);
      la(output);
      js_stack_declaration_asyncify(stack, declaration);
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
