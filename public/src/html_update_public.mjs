import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
export async function html_update_public(search) {
  let name = await app_shared_name_search_info(search);
  await html_update_public_generic(app_name, file_path, a_name);
}
