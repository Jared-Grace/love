import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function psalms_playlists_descriptions_payload_path() {
  "Where the words of each chapter sit waiting, already paired with the playlist they belong under.";
  let path = folder_gitignore_join("psalms_descriptions_payload.json");
  return path;
}
