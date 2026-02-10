import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_main_get } from "../../../love/public/src/app_shared_name_main_get.mjs";
import { app_shared_name_latest } from "../../../love/public/src/app_shared_name_latest.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
import { html_name_to_path_latest } from "../../../love/public/src/html_name_to_path_latest.mjs";
export async function html_update_latest(name) {
  "todo: maybe rename staging everywhere to latest to be consistent with naming, one less name (staging not needed) to remember";
  let v2 = await app_shared_name_main_get(name);
  name = property_get(v2, "a_name");
  let f_name = app_shared_name_latest(name);
  let file_path = html_name_to_path_latest(name);
  await html_update_public_generic(f_name, file_path, name);
}
