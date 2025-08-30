import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { list_single } from "./list_single.mjs";
import { not } from "./not.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_rename(from, to) {
  async function lambda(a) {
    let { node } = a;
    let { arguments: arguments2 } = node;
    let s1 = list_size_1(arguments2);
    if (not(s1)) {
      return;
    }
    log(arguments2);
    let a0 = list_single(arguments2);
    let nti = js_node_type_not_is(a0, "Literal");
    if (nti) {
      return;
    }
    object_property_set(a0, "name", to);
  }
  marker("a");
  let f_name_current = await data_function_current_get();
  let v = await function_transform_marker_specified(
    f_name_current,
    from,
    lambda,
  );
}
