import { claude_bash_commands_gathered_ranked } from "./claude_bash_commands_gathered_ranked.mjs";
import { bash_command_program_arguments } from "./bash_command_program_arguments.mjs";
import { path_shape } from "./path_shape.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function claude_bash_program_argument_shapes_ranked(
  days,
  program,
  count,
) {
  "What one named program has been pointed at over the sessions of the last so many days, counted by the kind of place rather than the exact path, commonest first.";
  "This is the reading that says whether naming a program would buy anything. A program handed the repo's own code again and again is a shape of work a command could take over for good; the same program handed somewhere outside the repo is somebody looking at something, and no seam of ours reaches it.";
  "The lines are counted separately from the words, because one line often hands over several files at once and the two numbers answer different questions - how often the reaching happens, and how much is reached for each time.";
  arguments_assert(arguments, 3);
  function shapes_of(command) {
    let given = bash_command_program_arguments(command, program);
    let none = equal(given.length, 0);
    if (none) {
      return null;
    }
    let shapes = list_map(given, path_shape);
    return shapes;
  }
  let gathered = await claude_bash_commands_gathered_ranked(
    days,
    count,
    shapes_of,
  );
  let found = {
    days,
    program,
    lines: gathered.lines,
    words: gathered.counted,
    top: gathered.top,
  };
  return found;
}
