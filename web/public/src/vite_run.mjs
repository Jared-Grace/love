import { vite_run_fn } from "../../../love/public/src/vite_run_fn.mjs";
import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
export async function vite_run(search) {
  let f_name = await app_shared_name_search_main(search);
  let stdout = await vite_run_fn(f_name);
  return stdout;
}
