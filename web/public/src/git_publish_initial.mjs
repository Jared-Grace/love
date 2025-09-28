import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_publish_initial(acronym) {
  let commands = ["checkout -b main", "push -u origin main"];
  await command_line_git_folder(folder, command_git);
}
