import { firebase_name } from "./firebase_name.mjs";
export async function firebase_storage_url_project() {
  const prefix = await firebase_name();
  let url = prefix + ".firebasestorage.app";
  return url;
}
