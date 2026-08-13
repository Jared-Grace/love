import { arguments_assert } from "./arguments_assert.mjs";
import { claude_transcript_paths } from "./claude_transcript_paths.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { claude_bash_commands_file } from "./claude_bash_commands_file.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function claude_bash_commands() {
  "Every shell command every session has run in this repo, gathered from the records the sessions themselves left behind";
  "This is the measurement that says which parts of the machine are still being reached for by hand. The point of naming a command is that it can then be composed, reused and granted; a program that keeps turning up here is one the repo has not got a name for yet, and this is how that is found rather than guessed.";
  "It reads what happened rather than what anybody remembers happening, which matters because the memory of it is the thing being checked. A list of missing commands written from recollection can only ever hold the ones somebody noticed.";
  arguments_assert(arguments, 0);
  let paths = claude_transcript_paths();
  let per_session = await list_map_unordered_async(
    paths,
    claude_bash_commands_file,
  );
  let commands = [];
  for (let session of per_session) {
    list_add_multiple(commands, session);
  }
  return commands;
}
