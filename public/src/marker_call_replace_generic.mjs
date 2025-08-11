import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_single } from "./list_single.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { integer_to } from "./integer_to.mjs";
import { object_merge } from "./object_merge.mjs";
export async function marker_call_replace_generic(input, lambda$a) {
  let arg_index = integer_to(input);
  let f_name = await data_function_current_get();
  return list_adder_async(async (la) => {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let {next} = marker_next_get(a);
      let expression = js_statement_call_get(next);
      if (expression === null) {
        return;
      }
      let { arguments: arguments2 } = expression;
      let replaced = null;
      if (input === "c") {
        let { callee } = expression;
        replaced = callee;
      } else {
        let arg_index_at = list_get(arguments2, arg_index);
        replaced = arg_index_at;
      }
      let to = object_merge(
        {
          replaced,
        },
        a,
      );
      await lambda$a(to);
      let { ast } = a;
      js_imports_missing_add(ast);
      let output = js_unparse(next);
      la(output);
    }
  });
}
