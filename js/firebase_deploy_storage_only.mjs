import { firebase_deploy_generic } from "../../love/js/firebase_deploy_generic.mjs";
export async function firebase_deploy_storage_only() {
  let stdout = await firebase_deploy_generic("--only storage");
  return stdout;
}
