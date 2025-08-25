import { global_function_async } from "./global_function_async.mjs";
import { firebase_admin_get } from "./firebase_admin_get.mjs";
export async function firebase_admin() {
  const admin = await firebase_admin_get();
  let value = await global_function_async(
    fn,
    property_name,
    async function lambda2() {},
  );
  return admin;
}
