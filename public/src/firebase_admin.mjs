import { global_function_async } from "./global_function_async.mjs";
import { firebase_admin_get } from "./firebase_admin_get.mjs";
export async function firebase_admin() {
  let value = await global_function_async(fn, async function lambda2() {});
  const admin = await firebase_admin_get();
  return admin;
}
