import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { function_dependencies_single } from "../../../love/public/src/function_dependencies_single.mjs";
export async function sandbox() {
  let r = await function_dependencies_single(app_g_main.name);
}
