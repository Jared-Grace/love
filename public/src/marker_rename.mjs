import { log } from "./log.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker } from "./marker.mjs";
export async function marker_rename(from, to) {
  async function lambda(a) {
    let { node } = a;
    callee;
    log(a);
  }
  marker("a");
  let f_name_current = await data_function_current_get();
  let v = await function_transform_marker_specified(
    f_name_current,
    from,
    lambda,
  );
}
