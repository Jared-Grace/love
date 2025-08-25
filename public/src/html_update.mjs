import { html_update_generic } from "./html_update_generic.mjs";
import { marker } from "./marker.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
export async function html_update(name) {
  marker("1");
  let file_path = html_name_to_path(name);
  await html_update_generic(name, file_path);
}
