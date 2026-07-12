import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_latest } from "./app_shared_name_latest.mjs";
import { html_update_public_generic } from "./html_update_public_generic.mjs";
export async function html_update_latest(search) {
  "todo: maybe rename staging everywhere to latest to be consistent with naming, one less name (staging not needed) to remember - not sure if this is done or not";
  let info = await app_shared_name_search_info(search);
  let name = property_get(info, "a_name");
  let f_name = app_shared_name_latest(name);
  let f_path_latest = property_get(info, "f_path_latest");
  await html_update_public_generic(f_name, f_path_latest, name);
}
