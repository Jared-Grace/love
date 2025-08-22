import { data_transform } from "./data_transform.mjs";
export async function marker_current_set(name_marker) {
  function lambda(previous) {
    return name_marker;
  }
  await data_transform("marker_current", null, lambda);
}
