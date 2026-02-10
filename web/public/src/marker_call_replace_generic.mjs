import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_statement_call_get } from "../../../love/public/src/js_statement_call_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function marker_call_replace_generic(input, lambda$a) {
  let arg_index = integer_to_try(input);
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let v = marker_next_get(a);
      let next = property_get(v, "next");
      let v2 = js_statement_call_get(next);
      let expression = property_get(v2, "expression");
      if (expression === null) {
        return;
      }
      let arguments2 = property_get(expression, "arguments");
      let replaced = null;
      if (input === "c") {
        let callee = property_get(expression, "callee");
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
      let ast = property_get(a, "ast");
      await js_imports_missing_add(ast);
      let output = await js_unparse(next);
      la(output);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
