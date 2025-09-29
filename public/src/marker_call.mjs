import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
import { js_stack_declaration_asyncify } from "../../../love/public/src/js_stack_declaration_asyncify.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
export async function marker_call(f_name_call) {
  let f_name_current = await function_current_get();
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
  let list = await list_adder_async(lambda2);
  return list;
}
