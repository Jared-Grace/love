import { folder_user_storage_function_path_function } from "./folder_user_storage_function_path_function.mjs";
import { gloss_write_root_folder } from "./gloss_write_root_folder.mjs";
export function folders_function_named_roots() {
  "Every folder outside this repo whose children are named after a function and nothing else.";
  "The name of a function is the whole address of each child, so a rename has to move every one of them or the new name reads an empty folder while every past write sits under the old one. Asked in one place because the list is what a rename walks and also what is checked for folders left behind: spelled twice, one of the two would be extended and the other would carry on reporting clean about a folder nobody moved.";
  "One store of answers a function remembers, and one handover folder a person authors into by hand. Both were being stranded by a rename until the second one was added here - the code moved, the authored chapters did not, and nothing said so.";
  let roots = [
    folder_user_storage_function_path_function(),
    gloss_write_root_folder(),
  ];
  return roots;
}
