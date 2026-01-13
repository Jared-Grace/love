import { marker } from "../../../love/public/src/marker.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_name_main_get(f_name) {
  marker("1");
  let a_name = app_name_main(f_name);
  let v2 = await function_exists(a_name);
  let exists = object_property_get(v2, "exists");
  if (not(exists)) {
    let mapped = await apps_names();
    f_name = list_find_starts_with(mapped, f_name);
    a_name = app_name_main(f_name);
  }
  let v3 = {
    a_name,
    f_name,
  };
  return v3;
}
