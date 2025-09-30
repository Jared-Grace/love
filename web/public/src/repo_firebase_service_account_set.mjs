import { repo_about_set } from "../../../love/public/src/repo_about_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_firebase_service_account_set(value) {
  marker("1");
  const key = "firebase_service_account";
  await repo_about_set(repo, value, key);
}
