import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_rename(from, to) {
  async function lambda(a) {
    let node = property_get(a, "node");
    let arguments2 = property_get(node, "arguments");
    let s1 = list_size_1(arguments2);
    if (not(s1)) {
      return;
    }
    let a0 = list_single(arguments2);
    let nti = js_node_type_not_is(a0, "Literal");
    if (nti) {
      return;
    }
    let s = js_string(to);
    object_replace(a0, s);
  }
  let f_name_current = await function_current_get();
  let v = await function_transform_marker_specified(
    f_name_current,
    from,
    lambda,
  );
}
