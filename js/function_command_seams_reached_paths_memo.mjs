import { arguments_assert } from "./arguments_assert.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { function_seams_reached_paths_memo } from "./function_seams_reached_paths_memo.mjs";
export async function function_command_seams_reached_paths_memo(
  f_name,
  remembered,
) {
  "For each command-running function this one can reach, the chain of calls that gets there, reusing what an earlier walk already read.";
  "The answer is the same one the single-name version gives - the object handed in only saves reading a file twice, so asking this about every standing grant in turn costs one pass over the graph rather than one pass each.";
  "The walk itself is the same one whatever is being looked for, so it lives once and is handed the set to look for - this one names the command-running set and nothing else.";
  arguments_assert(arguments, 2);
  let seams = functions_command_seams();
  let paths = await function_seams_reached_paths_memo(
    f_name,
    seams,
    remembered,
  );
  return paths;
}
