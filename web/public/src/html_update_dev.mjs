import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { folder_src } from "./folder_src.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { html_update_generic } from "./html_update_generic.mjs";
import { marker } from "./marker.mjs";
export async function html_update_dev(name) {
  marker("1");
  let file_path = html_name_to_path_dev(name);
  async function paths_get(f_name_ext) {
    let src = folder_src();
    let output = await function_parse_declaration_js_unparse(f_name);
    const from_paths = [src, f_name_ext];
    return from_paths;
  }
  await html_update_generic(name, file_path, paths_get);
}
