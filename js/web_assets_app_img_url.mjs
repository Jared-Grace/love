import { web_assets_app_img_path } from "./web_assets_app_img_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
export function web_assets_app_img_url(app_name, img_name) {
  "$plain app_name";
  "$plain img_name";
  "Where a browser fetches one app's own picture.";
  "IT IS THE WHOLE ADDRESS AND NOT A SHORT ONE, which is what a link card and an installed app's icon both need: the program reading those is somewhere else entirely and has only the address to go on.";
  let path = web_assets_app_img_path(app_name, img_name);
  let url = web_assets_url(path);
  return url;
}
