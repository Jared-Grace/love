import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { list_concat } from "./list_concat.mjs";
import { node_run_lines_whole } from "./node_run_lines_whole.mjs";
import { json_from } from "./json_from.mjs";
export async function function_run_fresh_args(f_name, args) {
  arguments_assert(arguments, 2);
  ("Asks this repo one of its own questions, with arguments, in a process that has loaded nothing yet, and reads back what it answered.");
  ("The neighbour without arguments says why a fresh process is needed: a run that has already loaded a function goes on holding the version it loaded. This one is for the question that has to be asked once per thing - one change to try per process, because each one replaces a different file as it loads.");
  ("The program is still never a parameter: the name is checked before anything is spawned, and the arguments go to that function as words, each one whole, with no shell in between to read them as anything else.");
  await function_exists_assert(f_name);
  let folder = folder_repo_love();
  let words = list_concat(["scripts/ai.mjs", f_name], args);
  let printed = await node_run_lines_whole(folder, words);
  let answered = json_from(printed);
  return answered;
}
