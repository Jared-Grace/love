import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { firebase_service_account_love_generic } from "./firebase_service_account_love_generic.mjs";
export async function firebase_service_account_love() {
  let name = firebase_project_name_jg();
  let file_path = await firebase_service_account_love_generic(name);
  return file_path;
}
