import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_publish_initial(acronym) {
  let branch_name = " main";
  let commands = ["checkout -b", "push -u origin"];
  function lambda(command) {
    let v = command + branch_name;
    return v;
  }
  let mapped = list_map(commands, lambda);
  await each_async(list, async function lambda2(item) {});
  await command_line_git_folder(folder, command_git);
}
