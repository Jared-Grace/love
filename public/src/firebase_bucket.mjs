import { firebase_admin } from "../../../love/public/src/firebase_admin.mjs";
export async function firebase_bucket() {
  let admin = await firebase_admin();
  let bucket = admin.storage().bucket();
  return bucket;
}
