import { js_declare_init_set } from "../../../love/public/src/js_declare_init_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_assign_replace(init_code) {
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      let init = js_parse_expression(init_code);
      js_declare_init_set(next, init);
      la(await js_unparse(next));
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
