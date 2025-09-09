import { firebase_admin } from "./firebase_admin.mjs";
export async function firebase_bucket() {
  const admin = await firebase_admin();
  const bucket = admin.storage().bucket();
  return bucket;
}
