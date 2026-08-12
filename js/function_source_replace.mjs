import { file_transform_replace } from "./file_transform_replace.mjs";
import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_source_replace(f_name, from, to) {
  "replaces a run of text inside one function's file with another run of text, given the function's name rather than its path";
  "do NOT grant. Nothing here reads as unsafe to the check, because no parameter is named for a command and nothing downstream runs one - but the third argument is source code, and it is written into a file this repo then executes. A standing approval would let any code at all be placed inside any function without anybody seeing it, which is what a grant on a command-runner is refused for, only lasting longer: the command-runner's code is gone when it finishes, and this one stays in the file.";
  arguments_assert(arguments, 3);
  let f_path = await function_name_to_path_found(f_name);
  await file_transform_replace(f_path, from, to);
}
