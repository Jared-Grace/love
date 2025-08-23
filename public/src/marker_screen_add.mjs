import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { log } from "./log.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(screen_name) {
  let a_name = await data_app_current_get();
  let prefixed = app_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  await function_current_set(combined);
  async function lambda(a) {
    let { next } = marker_next_get(a);
    log(next);
  }
  let v2 = await function_transform_marker_specified("screens", lambda);
  marker("1");
  return v;
}
