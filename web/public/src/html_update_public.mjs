import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { html_update_generic } from "../../../love/public/src/html_update_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
export async function html_update_public(name) {
  let a_name = app_name_prefixed(name);
  marker("1");
  let file_path = html_name_to_path(name);
  function paths_get(f_name_ext) {
    let src = folder_src();
    const from_paths = [src, f_name_ext];
    return from_paths;
  }
  await html_update_generic(name, file_path, paths_get, app_name_prefixed);
}
