import { html_update_externals_dependencies } from "../../../love/public/src/html_update_externals_dependencies.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function html_update_public_new() {
  let search = "rce";
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let f_path = property_get(r, "f_path");
  let a_name = property_get(r, "a_name");
  let r2 = await html_update_externals_dependencies(
    f_name,
    f_names_dependencies,
  );
}
