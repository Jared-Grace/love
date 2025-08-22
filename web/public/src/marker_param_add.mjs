import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { js_stack_declaration_asyncify } from "./js_stack_declaration_asyncify.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { list_insert } from "./list_insert.mjs";
import { marker } from "./marker.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
export async function marker_param_add(f_name_call) {
  let f_name_current = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name_current, lambda);
    async function lambda(a) {
      let f = js_stack_last_function(stack);
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
