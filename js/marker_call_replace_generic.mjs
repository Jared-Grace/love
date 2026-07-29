import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { list_get } from "./list_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function marker_call_replace_generic(input, lambda$a) {
  let arg_index = integer_to_try(input);
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let v = marker_next_get(a);
      let next = property_get(v, "next");
      let v2 = js_statement_call_get(next);
      if (null_is(v2)) {
        return;
      }
      let call = property_get(v2, "call");
      let arguments2 = js_call_arguments_get(call);
      let replaced = null;
      if (equal(input, "c")) {
        let callee = property_get(call, "callee");
        replaced = callee;
      } else {
        let arg_index_at = list_get(arguments2, arg_index);
        replaced = arg_index_at;
      }
      let to = object_merge_set(
        {
          replaced,
        },
        a,
      );
      await lambda$a(to);
      let ast = property_get(a, "ast");
      await js_imports_missing_add_all(ast);
      let output = await js_unparse(next);
      la(output);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
