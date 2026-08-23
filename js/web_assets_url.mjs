import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { web_assets_destination } from "./web_assets_destination.mjs";
export function web_assets_url(path) {
  "$plain path";
  "Where a browser fetches one asset, given where it sits under the assets folder.";
  "IT TAKES THE WHOLE PATH AND NEVER A PIECE OF ONE. Storage spells the slashes in an address as %2F, so a caller that took a folder's address and stuck the rest of the path on the end would produce something with real slashes half way through it, which storage reads as a different file that is not there. Building the whole path first and asking once is what keeps that impossible.";
  let destination = web_assets_destination(path);
  let project_url = firebase_storage_url_project_jg();
  let url = firebase_storage_url(destination, project_url);
  return url;
}
