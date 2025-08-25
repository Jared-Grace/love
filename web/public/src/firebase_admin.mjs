import { global_function_async } from "./global_function_async.mjs";
import { firebase_admin_get } from "./firebase_admin_get.mjs";
export async function firebase_admin() {
  let admin = await global_function_async(firebase_admin, firebase_admin_get);
  return admin;
}
