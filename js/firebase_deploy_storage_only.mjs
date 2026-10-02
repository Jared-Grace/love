import { firebase_deploy_generic } from "./firebase_deploy_generic.mjs";
export async function firebase_deploy_storage_only() {
  "Deploy only the storage rules to Firebase, leaving the hosted pages and everything else alone.";
  let stdout = await firebase_deploy_generic(["--only", "storage"]);
  return stdout;
}
