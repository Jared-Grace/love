import { web_assets_paths } from "./web_assets_paths.mjs";
import { web_assets_stored } from "./web_assets_stored.mjs";
import { web_assets_upload_needed_is } from "./web_assets_upload_needed_is.mjs";
export async function web_assets_paths_changed() {
  "Every asset whose writing would change what storage holds - new ones, and ones whose bytes or settings differ from what is up there.";
  "Storage is asked what it holds every time, and nothing is remembered between runs, so this is as safe to run at any moment as writing everything was: there is no record here to fall out of date.";
  let paths = await web_assets_paths();
  let stored = await web_assets_stored();
  let changed = [];
  for (let path of paths) {
    let needed = await web_assets_upload_needed_is(stored, path);
    if (needed) {
      changed.push(path);
    }
  }
  return changed;
}
