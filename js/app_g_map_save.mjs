import { browser_is } from "./browser_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_g_map_save_path } from "./app_g_map_save_path.mjs";
export async function app_g_map_save(rows) {
  "write the generated map out to a file beside the code, so the map the game is playing on can be read and looked at while it is being worked on.";
  "a browser does nothing here and returns. the path is worked out from where this file sits ON DISK, which a page has no way to know, so asking for it in a page threw before any writing was even attempted - and it was asked for on the FIRST boot of every new player, whose game has no save yet, which blanked the screen for exactly the person seeing the game for the first time.";
  "nothing is lost by leaving. the rows are already kept inside the game save the very next line writes, so the page has the map; the file is a second copy for a person reading the repo, and there is no repo in front of a player.";
  let browser = browser_is();
  if (browser) {
    return;
  }
  let p = app_g_map_save_path();
  await file_overwrite_json(p, rows);
}
