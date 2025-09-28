import { object_invert } from "./object_invert.mjs";
import { list_to_dictionary_async } from "./list_to_dictionary_async.mjs";
import { repo_acronym_get } from "./repo_acronym_get.mjs";
import { list_map } from "./list_map.mjs";
import { repos } from "./repos.mjs";
import { list_map_combine } from "./list_map_combine.mjs";
import { each_async } from "./each_async.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_publish_initial(acronym) {
  let all = await repos();
  let dictionary = await list_to_dictionary_async(list2, repo_acronym_get);
  let inverted = object_invert(dictionary);
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
