import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_main_both } from "../../../love/public/src/app_shared_name_search_main_both.mjs";
export async function app_shared_name_search_main(name) {
  let a = await app_shared_name_search_main_both(name);
  let f_name = property_get(a, "f_name");
  return f_name;
}
