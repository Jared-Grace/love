import { list_map } from "./list_map.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_publish_initial(acronym) {
  let branch_name = "main";
  let commands = ["checkout -b", "push -u origin"];
  let mapped = list_map(list, function lambda(item) {});
  await command_line_git_folder(folder, command_git);
}
