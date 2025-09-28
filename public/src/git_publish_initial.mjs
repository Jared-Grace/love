import { path_repo } from "./path_repo.mjs";
import { repo_acronym_to_name } from "./repo_acronym_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_combine } from "./list_map_combine.mjs";
import { each_async } from "./each_async.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_publish_initial(acronym) {
  let repo_name = await repo_acronym_to_name(acronym);
  let folder = path_repo(repo_name);
  function lambda(item) {}
  let mapped2 = list_map(list, lambda);
  let branch_name = " main";
  let commands = ["checkout -b", "push -u origin"];
  let mapped = list_map_combine(branch_name, commands);
  async function lambda2(command) {
    await command_line_git_folder(folder, command);
  }
  await each_async(mapped, lambda2);
}
