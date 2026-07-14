import { html_update_latest_webpack_generic } from "./html_update_latest_webpack_generic.mjs";
export async function html_update_dev_webpack(search) {
  let path = "f_path_dev";
  let cache_bust = true;
  await html_update_latest_webpack_generic(search, path, cache_bust);
}
