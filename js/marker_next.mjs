import { property_get } from "./property_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { function_current_get } from "./function_current_get.mjs";
export async function marker_next() {
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let r = marker_next_get(a);
      let next = property_get(r, "next");
      let code = js_unparse(next);
      la(code);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
