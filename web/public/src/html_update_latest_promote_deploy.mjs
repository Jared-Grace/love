import { firebase_deploy } from "../../../love/public/src/firebase_deploy.mjs";
import { html_update_latest_promote } from "../../../love/public/src/html_update_latest_promote.mjs";
export async function html_update_latest_promote_deploy(search) {
  let r = await html_update_latest_promote(search);
  let stdout = await firebase_deploy();
  return r;
}
