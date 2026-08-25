import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { node_run } from "./node_run.mjs";
import { json_from } from "./json_from.mjs";
export async function function_run_fresh(f_name) {
  arguments_assert(arguments, 1);
  ("Asks this repo one of its own questions in a process that has loaded nothing yet, and reads back what it answered.");
  ("A RUN THAT HAS ALREADY LOADED A FUNCTION GOES ON HOLDING THE VERSION IT LOADED. The file changing underneath it changes nothing about what is in hand, so a command that rewrites a function and then asks it something gets the answer from before its own edit. It does not fail; it answers, calmly, about a repo that no longer exists - which reads exactly like success.");
  ("That trap is not rare and it is not particular to one command. It is waiting in every command that edits code and then wants the edited code run: the register it just added a row to, the list it just added a name to, the order it just placed an example in. Each one met it separately and each one would have had to work it out from a wrong answer.");
  ("The program is never a parameter here - what is handed over is the name of a function this repo already answers to, checked before anything is spawned. So this cannot be asked to run something else, and the name being wrong is a refusal rather than a process that starts and fails.");
  ("It takes no arguments to pass on. A question asked freshly is asked of the repo as it now stands, and the ones worth asking that way - write the file out again, record the list again - are the ones that read everything and take nothing.");
  await function_exists_assert(f_name);
  let folder = folder_repo_love();
  let words = ["scripts/ai.mjs", f_name];
  let printed = await node_run(folder, words);
  let answered = json_from(printed);
  return answered;
}
