import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { vite_run_fn } from "../../../love/public/src/vite_run_fn.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
export async function vite_run(search) {
  let f_name = await app_shared_name_search_main(search);
  let f_names = [f_name, app_context_initialize.name];
  let stdout = await vite_run_fn(f_name2, path_prefix);
  let waited = await list_map_unordered_async(f_names, vite_run_fn);
  return waited;
}
