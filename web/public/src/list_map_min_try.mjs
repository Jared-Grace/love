import { firebase_login } from "../../../love/public/src/firebase_login.mjs";
import { list_min_try } from "../../../love/public/src/list_min_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function list_map_min_try(list, r) {
  let mapped = list_map(list, r);
  await firebase_login(context, on_logged_in);
  let left = list_min_try(mapped);
  return left;
}
