import { web_assets_img_path } from "./web_assets_img_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
export function web_assets_img_url(path) {
  "$plain path";
  "Where a browser fetches one picture, given where it sits under the pictures folder.";
  "EVERY PICTURE ADDRESS IN THE REPO IS BUILT HERE. That is what makes moving the pictures one edit rather than a hunt: nothing below this knows which bucket they are in or what the folder above them is called.";
  let img_path = web_assets_img_path(path);
  let url = web_assets_url(img_path);
  return url;
}
