import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { marker_down_choices_lambda } from "../../../love/public/src/marker_down_choices_lambda.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export async function marker_down_choices() {
  let f_name = await function_current_get();
  let choices = null;
  let v = await function_transform_marker(f_name, lambda);
  return choices;
  async function lambda(a) {
    let vs = marker_down_choices_lambda(a);
    let nodes = list_map_property(vs, "node");
    async function lambda2(item) {
      let l = list_is(item);
      if (l) {
        return item;
      } else {
        let code = await js_unparse(item);
        return code;
      }
    }
    choices = await list_map_unordered_async(nodes, lambda2);
    return choices;
  }
}
