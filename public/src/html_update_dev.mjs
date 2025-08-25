import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
import { html_update_generic } from "./html_update_generic.mjs";
import { marker } from "./marker.mjs";
export async function html_update_dev(name) {
  marker("1");
  let file_path = html_name_to_path_dev(name);
  await html_update_generic(name, file_path);
}
