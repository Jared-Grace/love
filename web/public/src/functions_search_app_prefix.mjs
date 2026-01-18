import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main_get } from "../../../love/public/src/app_name_main_get.mjs";
import { functions_search } from "../../../love/public/src/functions_search.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search_app_prefix(s) {
  marker("1");
  let v2 = await app_name_main_get(s);
  s = object_property_get(v2, "a_name");
  let a_name = app_name_prefixed(s);
  let separator = function_name_separator();
  let v = await functions_search(a_name + separator + "");
  object_property_set_exists_not(object, property_name, value);
  return v;
}
