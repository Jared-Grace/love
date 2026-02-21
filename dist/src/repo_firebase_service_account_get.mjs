import { repo_about_get } from "../../../love/public/src/repo_about_get.mjs";
export async function repo_firebase_service_account_get(repo_name) {
  const key = "firebase_service_account";
  let v = await repo_about_get(repo_name, key);
  return v;
}
