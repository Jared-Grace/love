import { app_shared_api } from "./app_shared_api.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_api_fn(a) {
  let fn = property_get(a, "fn");
  let f_name = fn.name;
  property_set_exists_not(a, "f_name", f_name);
  let r = await app_shared_api(a);
  return r;
}
