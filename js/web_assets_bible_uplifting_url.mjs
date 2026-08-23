import { web_assets_bible_uplifting_path } from "./web_assets_bible_uplifting_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
export function web_assets_bible_uplifting_url(file_name) {
  "$plain file_name";
  "Where a browser fetches one uplifting-verses file.";
  "EVERY ADDRESS INTO THAT FOLDER IS BUILT HERE, so moving the folder is one edit and never a search for the places that spelled it.";
  let path = web_assets_bible_uplifting_path(file_name);
  let url = web_assets_url(path);
  return url;
}
