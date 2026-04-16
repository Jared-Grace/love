import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { function_transform_multiple } from "../../../love/public/src/function_transform_multiple.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox_3() {
  let fns = [
    "g_distance_curried",
    "object_includes_curried_right",
    "g_distance_1_curried",
  ];
  async function lambda(item) {}
  await each_unordered_async(list, lambda);
  await function_delete_if_exists();
  await function_transform_multiple("c", app_g_click.name);
}
