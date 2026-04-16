import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { function_transform_multiple } from "../../../love/public/src/function_transform_multiple.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox_3() {
  let fns = ["g_distance_curried", "object_includes_curried_right"];
  await function_delete_if_exists();
  await function_transform_multiple("c", app_g_click.name);
}
