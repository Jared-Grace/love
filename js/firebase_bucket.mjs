import { firebase_admin } from "./firebase_admin.mjs";
export async function firebase_bucket() {
  "The one file store this project writes uploads into and reads them back out of.";
  let admin = await firebase_admin();
  let bucket = admin.storage().bucket();
  return bucket;
}
