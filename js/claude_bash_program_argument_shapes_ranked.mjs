import { claude_bash_commands } from "./claude_bash_commands.mjs";
import { bash_command_program_arguments } from "./bash_command_program_arguments.mjs";
import { path_shape } from "./path_shape.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_take } from "./list_take.mjs";
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
  let commands = await claude_bash_commands(days);
  let shapes = [];
  let lines = 0;
  for (let command of commands) {
    let given = bash_command_program_arguments(command, program);
    let none = equal(given.length, 0);
    if (none) {
      continue;
    }
    lines = add(lines, 1);
    for (let word of given) {
      let shape = path_shape(word);
      list_add(shapes, shape);
    }
  }
  let top = list_tally_ranked_top(shapes, count);
  let found = {
    days,
    program,
    lines,
    words: shapes.length,
    top,
  };
  return found;
}
