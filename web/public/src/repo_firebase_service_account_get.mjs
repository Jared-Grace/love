import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { repo_about_get } from "../../../love/public/src/repo_about_get.mjs";
export async function repo_firebase_service_account_get(repo) {
  marker("1");
  let repo_name = await user_repo_get();
  const key = "acronym";
  let v = await repo_about_get(repo, key);
  return v;
}
