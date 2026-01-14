import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_name_main_get(search) {
  let f_name = app_name_main(search);
  let v2 = await function_exists(f_name);
  let exists = object_property_get(v2, "exists");
  let app_name = null;
  if (not(exists)) {
    let mapped = await apps_names();
    app_name = list_find_starts_with(mapped, search);
    f_name = app_name_main(app_name);
  }
  log_keep({
    app_name,
    a_search: search,
  });
  let r = {
    f_name,
    a_name: app_name,
  };
  return r;
}
