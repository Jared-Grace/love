import { marker } from "../../../love/public/src/marker.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_add_folder_all(folder) {
  marker("1");
  await command_line_git_folder(folder, "add " + "-A");
}
