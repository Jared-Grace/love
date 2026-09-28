import { firebase_deploy } from "./firebase_deploy.mjs";
import { html_public_unlisted_from_latest } from "./html_public_unlisted_from_latest.mjs";
export async function html_public_unlisted_from_latest_firebase_deploy(search) {
  await html_public_unlisted_from_latest(search);
  await firebase_deploy();
}
