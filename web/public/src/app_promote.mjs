import { app_shared_name_search_main } from "../../../love/public/src/app_shared_name_search_main.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
export async function app_promote(name) {
  assert_arguments(arguments, 1);
  let combined = await app_shared_name_search_main(name);
  let v = await firebase_promote_function(combined);
}
