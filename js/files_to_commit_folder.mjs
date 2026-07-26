import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function files_to_commit_folder() {
  "Where the running note of changed files is kept, next to the other local";
  "records rather than in history. It is scaffolding for the commit that comes";
  "after, and the commit throws it away, so it is never anything to share.";
  let name = "files_written";
  let folder = folder_gitignore_join(name);
  return folder;
}
