import { app_name_main } from "./app_name_main.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { folder_src } from "./folder_src.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { html_update_generic } from "./html_update_generic.mjs";
import { marker } from "./marker.mjs";
export async function html_update_dev(name) {
  marker("1");
  let file_path = html_name_to_path_dev(name);
  function paths_get(f_name_ext) {
    let src = folder_src();
    let previous = folder_previous();
    const from_paths = [previous, src, f_name_ext];
    return from_paths;
  }
  await html_update_generic(name, file_path, paths_get, app_name_main);
}
