import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_main_get } from "../../../love/public/src/app_shared_name_main_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
export async function app_promote(name) {
  assert_arguments(arguments, 1);
  let v2 = await app_shared_name_main_get(name);
  let combined = property_get(v2, "f_name");
  let v = await firebase_promote_function(combined);
  return v;
}
