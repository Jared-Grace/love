import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function psalms_playlists_order_payload_path() {
  "Where the short list of Psalm playlists standing in the wrong order waits for something signed in to pick it up.";
  let path = folder_gitignore_join("psalms_playlists_order_payload.json");
  return path;
}
