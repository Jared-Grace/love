import { html_update_latest_webpack_generic } from "./html_update_latest_webpack_generic.mjs";
export async function html_update_latest_webpack(search) {
  let path = "f_path_latest";
  await html_update_latest_webpack_generic(search, path);
}
