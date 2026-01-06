import { marker } from "../../../love/public/src/marker.mjs";
import { window_open } from "../../../love/public/src/window_open.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function window_open_app(app_fn) {
  marker("1");
  let file_name = file_name_html(app_fn.name);
  window_open(file_name);
}
