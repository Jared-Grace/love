import { web_assets_destination } from "./web_assets_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export function web_assets_url_unstamped(path) {
  "$plain path";
  "Where a browser fetches one asset, given where it sits under the assets folder, with no stamp on the end - for a file whose address can only ever hand back the same bytes.";
  let destination = web_assets_destination(path);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  return url;
}
