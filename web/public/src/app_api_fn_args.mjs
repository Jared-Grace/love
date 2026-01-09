import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_fn_args(a) {
  marker("1");
  let fn = object_property_get(a, "fn");
  let f_name = fn.name;
  object_property_set_exists_not(a, "f_name", f_name);
  let r = await app_api(a);
  return r;
}
