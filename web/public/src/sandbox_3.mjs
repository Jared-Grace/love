import { marker } from "../../../love/public/src/marker.mjs";
import { marker_screen_add } from "../../../love/public/src/marker_screen_add.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function sandbox_3() {
  marker("1");
  await function_delete("app_karate_settings_computer_save");
  let v2 = await marker_screen_add("settings_computer_save");
}
