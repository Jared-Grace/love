import { function_auto } from "../../../love/public/src/function_auto.mjs";
import { function_delete_if_exists_multiple } from "../../../love/public/src/function_delete_if_exists_multiple.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
export async function sandbox_3() {
  let fns = ["list_filter_object_includes"];
  await function_delete_if_exists_multiple(fns);
  let result = await function_auto(app_g_click.name);
}
