import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { data_app_current_set } from "../../../love/public/src/data_app_current_set.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_open_app(a_name) {
  marker("1");
  let f_name = app_name_main(a_name);
  let v2 = await function_exists(f_name);
  let exists = object_property_get(v2, "exists");
  if (not(exists)) {
    let mapped = await apps_names();
    a_name = list_find_starts_with(mapped, a_name);
    f_name = app_name_main(a_name);
  }
  let v = await function_open(f_name);
  await data_app_current_set(a_name);
  return v;
}
