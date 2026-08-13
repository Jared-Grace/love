import { fn_name } from "./fn_name.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { claude_bash_commands_file } from "./claude_bash_commands_file.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function claude_bash_commands(days) {
  "Every shell command run in this repo over the last so many days, gathered from the records the sessions themselves left behind";
  "This is the measurement that says which parts of the machine are still being reached for by hand. The point of naming a command is that it can then be composed, reused and granted; a program that keeps turning up here is one the repo has not got a name for yet, and this is how that is found rather than guessed.";
  "It reads what happened rather than what anybody remembers happening, which matters because the memory of it is the thing being checked. A list of missing commands written from recollection can only ever hold the ones somebody noticed.";
  ("How far back to read has to be said, and there is no way to leave it out. Read whole, the record is mostly the past: a shape of work that was given a name months ago goes on being counted at its old size for as long as the archive is kept, so the reading names something already built as the next thing to build. That happened - the commonest shape in an unwindowed reading turned out to be one `",
    fn_name("function_read_multiple"),
    "` had already been written for, and its own prose says it was written from this same measurement. Ask for everything by asking for a great many days, so that the whole archive is something chosen rather than something arrived at by not saying.");
  arguments_assert(arguments, 1);
  let paths = claude_transcript_paths_recent(days);
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
