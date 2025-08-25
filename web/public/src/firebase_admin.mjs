import { firebase_admin_get } from "./firebase_admin_get.mjs";
export async function firebase_admin() {
  const admin = await firebase_admin_get();
  return admin;
}
