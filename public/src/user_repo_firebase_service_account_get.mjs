import { repo_firebase_service_account_get } from "../../../love/public/src/repo_firebase_service_account_get.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function user_repo_firebase_service_account_get() {
  marker("1");
  let repo_name = await user_repo_get();
  let v = await repo_firebase_service_account_get(repo_name);
  return v;
}
