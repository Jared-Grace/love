import { list_filter_text_match_ordered } from "../../../love/public/src/list_filter_text_match_ordered.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
export async function app_shared_name_main_get(search) {
  let f_name = app_shared_name_main(search);
  let e = await function_unalias_exists(f_name);
  let exists = property_get(e, "exists");
  let app_name = null;
  if (exists) {
    app_name = search;
  } else {
    let mapped = await apps_names();
    let app_names = list_filter_text_match_ordered(mapped, search);
  }
  f_name = app_shared_name_main(app_name);
  log_keep({
    search,
    app_name,
  });
  let r = {
    f_name,
    a_name: app_name,
  };
  return r;
}
