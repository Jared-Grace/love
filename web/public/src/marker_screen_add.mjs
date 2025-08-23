import { function_current_set } from "./function_current_set.mjs";
import { data_function_current_restore } from "./data_function_current_restore.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(screen_name) {
  async function lambda3() {
    await function_current_set(f_name_current);
    async function lambda(a) {
      let { next } = marker_next_get(a);
    }
    let v2 = await function_transform_marker_current(lambda);
  }
  await data_function_current_restore(lambda3);
  marker("1");
  return v;
}
