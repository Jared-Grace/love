import { global_function_async } from "./global_function_async.mjs";
import { firebase_admin_get } from "./firebase_admin_get.mjs";
export async function firebase_admin() {
  async function lambda2() {}
  let value = await global_function_async(fn, lambda2);
  const admin = await firebase_admin_get();
  return admin;
}
