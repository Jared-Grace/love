import { firebase_deploy } from "./firebase_deploy.mjs";
import { html_public_unlisted_refresh_multiple } from "./html_public_unlisted_refresh_multiple.mjs";
export async function html_public_latest_refresh_multiple_firebase_deploy(
  searches_comma,
) {
  await html_public_unlisted_refresh_multiple(searches_comma);
  await firebase_deploy();
}
