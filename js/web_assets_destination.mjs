import { web_assets_storage_prefix } from "./web_assets_storage_prefix.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function web_assets_destination(path) {
  "$plain path";
  "Where one asset is written in storage, given where it sits under the assets folder.";
  "The separators are forward slashes because a storage path is a URL path and not a path on any disk.";
  "IT BEGINS WITH THE STORAGE PREFIX AND NOT WITH THE FOLDER'S NAME, THOUGH TODAY THOSE ARE THE SAME WORD. The folder is where these files sit on a disk and may be moved or drawn out into a tree whenever it suits this repo; the prefix is carried inside every address already handed out, so it never moves. Asking for the one that never moves is what lets the other one move.";
  let prefix = web_assets_storage_prefix();
  let destination = list_join_slash_forward([prefix, path]);
  return destination;
}
