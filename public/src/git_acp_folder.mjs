import { marker } from "./marker.mjs";
import { git_push_folder } from "./git_push_folder.mjs";
import { git_commit_folder } from "./git_commit_folder.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_acp_folder(folder, message) {
  marker("1");
  await command_line_git_folder(folder, "add -A");
  await git_commit_folder(folder, message);
  await git_push_folder(folder);
}
