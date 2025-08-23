import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { log } from "./log.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { data_function_current_restore } from "./data_function_current_restore.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(screen_name) {
  async function lambda3() {
    let a_name = await data_app_current_get();
    log({
      a_name,
    });
    let combined = function_name_combine_multiple(a_name, "screens");
    await function_current_set(combined);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      log(next);
    }
    let v2 = await function_transform_marker_current(lambda);
  }
  await data_function_current_restore(lambda3);
  marker("1");
  return v;
}
