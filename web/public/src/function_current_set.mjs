import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
export async function function_current_set(f_name) {
  await data_transform("function_current", null, (previous) => f_name);
  await marker_current_set("1");
}
