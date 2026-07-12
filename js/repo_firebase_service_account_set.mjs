import { user_repo_get } from "./user_repo_get.mjs";
import { repo_about_set } from "./repo_about_set.mjs";
export async function repo_firebase_service_account_set(value) {
  let key = "firebase_service_account";
  let repo_name = await user_repo_get();
  await repo_about_set(repo_name, value, key);
}
