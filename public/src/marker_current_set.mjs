import { data_path } from "./data_path.mjs";
import { data_transform } from "./data_transform.mjs";
export async function marker_current_set(name_marker) {
  function lambda(previous) {
    return name_marker;
  }
  let d_path = data_path();
  await data_transform("marker_current", null, lambda, d_path);
}
