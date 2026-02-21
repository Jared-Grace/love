import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_shared_name_latest_text } from "../../../love/public/src/app_shared_name_latest_text.mjs";
import { vite_run_fn_curried_right } from "../../../love/public/src/vite_run_fn_curried_right.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
export async function vite_run(search) {
  let f_name = await app_shared_name_search_main(search);
  let f_names = [f_name, app_context_initialize.name];
  let latest = app_shared_name_latest_text();
  let s = text_slash_forward();
  let combined = text_combine(latest, right);
  let r2 = vite_run_fn_curried_right(path_prefix);
  let waited = await list_map_unordered_async(f_names, r2);
  return waited;
}
