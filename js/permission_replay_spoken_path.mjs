import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function permission_replay_spoken_path() {
  "Where the last line said at the start of a session is kept, so the next session can tell whether it would be saying anything new.";
  "It is a local record rather than a finding. The sessions that have to agree about what has already been said are the ones sharing this one working folder, and that is exactly the set this folder is shared by; nothing off this machine has any use for it.";
  "The file is deliberately not named after a function, for the same reason the neighbouring record of ranked shapes gives: a word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the path then follows every later rename of it while the file already on disk does not.";
  let path = folder_gitignore_join("prompts_spoken.txt");
  return path;
}
