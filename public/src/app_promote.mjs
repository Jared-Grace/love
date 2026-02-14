import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_main_both } from "../../../love/public/src/app_shared_name_search_main_both.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
export async function app_promote(name) {
  assert_arguments(arguments, 1);
  let a = await app_shared_name_search_main_both(name);
  let combined = property_get(a, "f_name");
  let v = await firebase_promote_function(combined);
  return v;
}
