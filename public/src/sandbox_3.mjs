import { function_delete_if_exists_multiple } from "../../../love/public/src/function_delete_if_exists_multiple.mjs";
import { function_transform_multiple } from "../../../love/public/src/function_transform_multiple.mjs";
export async function sandbox_3() {
  let fns = [
    "g_distance_curried",
    "object_includes_curried_right",
    "g_distance_1_curried",
  ];
  await function_delete_if_exists_multiple(fns);
  await function_transform_multiple("c", "app_g_click");
}
