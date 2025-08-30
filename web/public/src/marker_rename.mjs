import { object_property_set } from "./object_property_set.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker } from "./marker.mjs";
export async function marker_rename(from, to) {
  async function lambda(a) {
    let { node } = a;
    let { callee } = node;
    let nti = js_identifier_not_is(callee);
    if (nti) {
      return;
    }
    object_property_set(callee, "name", to);
  }
  b("a");
  let f_name_current = await data_function_current_get();
  let v = await function_transform_marker_specified(
    f_name_current,
    from,
    lambda,
  );
}
