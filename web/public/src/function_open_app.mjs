import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { data_app_current_set } from "../../../love/public/src/data_app_current_set.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
export async function function_open_app(f_name) {
  marker("1");
  let v2 = await function_exists(f_name);
  let exists = object_property_get(v2, "exists");
  if (not(exists)) {
    let mapped = await apps_names();
    let filtered = list_filter_starts_with(list, prefix);
  }
  let a_name = app_name_main(f_name);
  let v = await function_open(a_name);
  await data_app_current_set(f_name);
  return v;
}
