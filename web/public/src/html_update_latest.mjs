import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_latest } from "../../../love/public/src/app_shared_name_latest.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
export async function html_update_latest(search) {
  "todo: maybe rename staging everywhere to latest to be consistent with naming, one less name (staging not needed) to remember";
  let info = await app_shared_name_search_info(search);
  let name = property_get(info, "a_name");
  let f_name = app_shared_name_latest(name);
  let f_path_latest = property_get(r, "f_path_latest");
  await html_update_public_generic(f_name, f_path_latest, name);
}
