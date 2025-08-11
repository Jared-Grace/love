import { data_transform } from "./data_transform.mjs";
export async function marker_current_set(name) {
  await data_transform("marker_current", null, (previous) => name);
}
