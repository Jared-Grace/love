import { function_delete_if_exists_multiple } from "../../../love/public/src/function_delete_if_exists_multiple.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { function_transform_multiple } from "../../../love/public/src/function_transform_multiple.mjs";
export async function sandbox_3() {
  let fns = ["list_filter_object_includes"];
  await function_delete_if_exists_multiple(fns);
  await function_transform_multiple("c", app_g_click.name);
}
