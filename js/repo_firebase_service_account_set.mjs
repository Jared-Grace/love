import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { repo_about_set } from "../../../love/public/src/repo_about_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_firebase_service_account_set(value) {
  marker("1");
  const key = "firebase_service_account";
  let repo_name = await user_repo_get();
  await repo_about_set(repo_name, value, key);
}
