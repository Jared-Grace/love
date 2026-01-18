import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_generic_name_main_get } from "../../../love/public/src/app_generic_name_main_get.mjs";
import { data_app_current_set } from "../../../love/public/src/data_app_current_set.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_open_app(a_name) {
  marker("1");
  let v2 = await app_generic_name_main_get(a_name);
  let a_name_final = object_property_get(v2, "a_name");
  let f_name = object_property_get(v2, "f_name");
  let v = await function_open(f_name);
  await data_app_current_set(a_name_final);
  return v;
}
