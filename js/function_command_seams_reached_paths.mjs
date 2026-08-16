import { function_command_seams_reached_paths_memo } from "./function_command_seams_reached_paths_memo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_command_seams_reached_paths(f_name) {
  "For each command-running function this one can reach, the chain of calls that gets there - the evidence behind a refused permission grant, in the shape of names.";
  "An empty answer is the clean one, and it is the same clean answer its neighbour gives; what this adds is the other case. A refusal says a function reaches a shell or an eval and stops there, so the reader is left to guess whether the reach is what the function is for or something three names deep that nobody meant. Guessing is what this removes.";
  "The walk is the shared one and the set is the command-running set, which is exactly the pairing the refusal itself is measured from. So the chain answered here is over the same edges the refusal was decided on, rather than a second opinion that happens to agree.";
  "One name on its own is the same walk as many with nothing remembered beforehand, so this hands over an empty memory rather than keeping a second copy of the walk.";
  arguments_assert(arguments, 1);
  let remembered = {};
  let paths = await function_command_seams_reached_paths_memo(
    f_name,
    remembered,
  );
  return paths;
}
