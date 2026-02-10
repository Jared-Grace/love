import { app_api } from "../../../love/public/src/app_api.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_api_fn(a) {
  let fn = property_get(a, "fn");
  let f_name = fn.name;
  property_set_exists_not(a, "f_name", f_name);
  let r = await app_api(a);
  return r;
}
