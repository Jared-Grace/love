import { marker_screen_add } from "../../../love/public/src/marker_screen_add.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function sandbox_3(f_path) {
  await function_delete("app_karate_settings");
  let v2 = await marker_screen_add("settings");
}
