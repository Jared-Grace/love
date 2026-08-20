import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { path_join } from "./path_join.mjs";
export function function_name_to_path_absolute(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Where a function's file would sit, spelled the whole way from the top of the disk, worked out from its name alone and without asking whether anything is actually there.");
  ("The twin of the one that answers the same question from the repo root down. That one is the right answer for anything written into a file, where a short address is the readable one; this one is for reaching the file, because a name spelled from the root reaches the same file whatever folder the program happens to have been started in.");
  ("Neither of them looks the name up, so neither follows an alias to the file it stands for. A caller meaning to reach the file of the function it named gets that file, which is what a command editing source has to have.");
  let repo = folder_repo_love();
  let f_path_relative = function_name_to_path_relative(f_name);
  let f_path = path_join([repo, f_path_relative]);
  return f_path;
}
