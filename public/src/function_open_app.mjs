import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_main_both } from "../../../love/public/src/app_shared_name_search_main_both.mjs";
import { data_app_current_set } from "../../../love/public/src/data_app_current_set.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function function_open_app(a_name) {
  let r = await app_shared_name_search_main_both(a_name);
  let a_name_final = property_get(r, "a_name");
  let f_name = property_get(r, "f_name");
  let v = await function_open(f_name);
  await data_app_current_set(a_name_final);
  return v;
}
