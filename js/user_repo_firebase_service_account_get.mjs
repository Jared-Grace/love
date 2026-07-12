import { repo_firebase_service_account_get } from "./repo_firebase_service_account_get.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function user_repo_firebase_service_account_get() {
  let repo_name = await user_repo_get();
  let v = await repo_firebase_service_account_get(repo_name);
  return v;
}
