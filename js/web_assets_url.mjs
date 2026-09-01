import { web_assets_destination } from "./web_assets_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { web_assets_version } from "./web_assets_version.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function web_assets_url(path) {
  "$plain path";
  "Where a browser fetches one asset, given where it sits under the assets folder.";
  "IT TAKES THE WHOLE PATH AND NEVER A PIECE OF ONE. Storage spells the slashes in an address as %2F, so a caller that took a folder's address and stuck the rest of the path on the end would produce something with real slashes half way through it, which storage reads as a different file that is not there. Building the whole path first and asking once is what keeps that impossible.";
  "The address ends in a STAMP, and every asset address in the repo is built here, so saying it once here says it everywhere. Storage names a file by its path alone, which means a redrawn picture keeps the address the old one had; the stamp is what makes new art a new address, and that is what pays for a browser being told it may keep the old address for a year without ever asking again.";
  "Storage ignores a query it was not expecting, so the stamp costs nothing at the far end. It is read by the browser and by nothing else - which is the point, because the only thing that needs to notice is the store of pictures a phone is already holding.";
  let destination = web_assets_destination(path);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  let stamp = web_assets_version();
  let stamped = text_combine_multiple([url, "&v=", stamp]);
  return stamped;
}
