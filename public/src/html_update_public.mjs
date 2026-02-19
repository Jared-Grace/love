import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
export async function html_update_public(search) {
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let f_path = property_get(r, "f_path");
  let a_name = property_get(r, "a_name");
  let f_name = property_get(r, "f_name");
  await html_update_public_generic(app_name, file_path, a_name);
}
