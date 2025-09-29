import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { html_name_to_path_dev } from "../../../love/public/src/html_name_to_path_dev.mjs";
import { html_update_generic } from "../../../love/public/src/html_update_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
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
