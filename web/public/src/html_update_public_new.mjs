import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_public_new(search) {
  let info = await app_shared_name_search_info(search);
}
