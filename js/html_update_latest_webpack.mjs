import { html_update_latest_webpack_generic } from "./html_update_latest_webpack_generic.mjs";
export async function html_update_latest_webpack(search) {
  let path = "f_path_latest";
  let cache_bust = false;
  await html_update_latest_webpack_generic(search, path, cache_bust);
}
