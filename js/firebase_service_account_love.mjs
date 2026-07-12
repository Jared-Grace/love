import { firebase_service_account_love_generic } from "./firebase_service_account_love_generic.mjs";
export async function firebase_service_account_love() {
  let name = "jared-grace";
  let file_path = await firebase_service_account_love_generic(name);
  return file_path;
}
