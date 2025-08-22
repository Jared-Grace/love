import { js_declare_init_set } from "./js_declare_init_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_assign_replace(init_code) {
  let f_name = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      let init = js_parse_expression(init_code);
      js_declare_init_set(next, init);
      la(await js_unparse(next));
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
