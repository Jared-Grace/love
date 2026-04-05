import { function_rename_replace_curried_right_2 } from "../../../love/public/src/function_rename_replace_curried_right_2.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_karate } from "../../../karate_code/public/src/app_karate.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { function_dependencies_single } from "../../../love/public/src/function_dependencies_single.mjs";
export async function sandbox() {
  let r = await function_dependencies_single(app_g_main.name);
  let filtered = list_filter_starts_with(r, app_karate.name);
  await function_rename_replace_curried_right_2(from, to);
  async function lambda(item) {
    let v = await function_rename_replace(item, "karate", "shared");
  }
  await each_async(list, lambda);
  return filtered;
}
