import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
export async function git_head_commit() {
  "The full name of the commit we are standing on";
  "The full name rather than the short one, because a short name is only unique until the day it is not, and this one is used as a key";
  "Which folder is asked lives one name along, because the neighbouring repos are asked the very same question and there is no reason for two readings of it. This names the folder; that one knows how to ask.";
  let here = folder_current_absolute();
  let commit = await git_folder_head_commit(here);
  return commit;
}
