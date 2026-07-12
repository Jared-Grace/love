import { app_shared_name_search_main } from "./app_shared_name_search_main.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_promote_function } from "./firebase_promote_function.mjs";
export async function app_promote(name) {
  arguments_assert(arguments, 1);
  let combined = await app_shared_name_search_main(name);
  await firebase_promote_function(combined);
}
