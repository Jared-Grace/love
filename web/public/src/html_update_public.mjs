import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_main_get } from "../../../love/public/src/app_shared_name_main_get.mjs";
import { html_update_public_generic } from "../../../love/public/src/html_update_public_generic.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
export async function html_update_public(search) {
  let v2 = await app_shared_name_main_both(search);
  let name = property_get(v2, "a_name");
  let a_name = app_shared_name_prefixed(name);
  let file_path = html_name_to_path(name);
  await html_update_public_generic(a_name, file_path, name);
}
