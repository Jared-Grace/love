import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main_get } from "../../../love/public/src/app_name_main_get.mjs";
import { functions_search } from "../../../love/public/src/functions_search.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search_app_prefix(a_name) {
  marker("1");
  let v2 = await app_name_main_get(a_name);
  let f_name = object_property_get(v2, "f_name");
  log({
    f_name,
  });
  let v = await functions_search(f_name);
  return v;
}
