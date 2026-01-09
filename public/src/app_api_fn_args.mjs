import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_fn_args(a) {
  marker("1");
  let fn2 = object_property_get(a, "fn");
  let f_name = fn.name;
  let r = await app_api(f_name, args);
  return r;
}
