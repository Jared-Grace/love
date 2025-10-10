import { html_name_to_path_staging } from "../../../love/public/src/html_name_to_path_staging.mjs";
import { app_name_latest } from "../../../love/public/src/app_name_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
export async function html_update_latest(name) {
  marker("1");
  ("todo: maybe rename staging everywhere to latest to be consistent with naming, one less name (staging not needed) to remember");
  let f_name = app_name_latest(name);
  let file_path = html_name_to_path_staging(name);
  await html_update_public_generic(f_name, file_path, name);
}
