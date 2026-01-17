import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_api_fn(a) {
  let fn = object_property_get(a, "fn");
  let f_name = fn.name;
  object_property_set_exists_not(a, "f_name", f_name);
  const p = "args";
  let n = object_property_exists_not(a, p);
  if (n) {
    object_property_set(object, property_name, value);
  }
  let r = await app_api(a);
  return r;
}
