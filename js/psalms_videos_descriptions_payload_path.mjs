import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function psalms_videos_descriptions_payload_path() {
  "Where the words of each song sit waiting, already paired with the video they belong under.";
  let path = folder_gitignore_join("psalms_videos_descriptions_payload.json");
  return path;
}
