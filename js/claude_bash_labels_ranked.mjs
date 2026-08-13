import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { claude_bash_commands } from "./claude_bash_commands.mjs";
import { bash_command_labels } from "./bash_command_labels.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function claude_bash_labels_ranked(days) {
  "What the sessions of the last so many days have reached for at the shell, counted and commonest first";
  "The count is the whole answer. A program run once is somebody looking at something; a program run four hundred times is a shape of work the repo has no name for, and naming it takes that shape out of the shell for good.";
  "A dispatcher call counts under its own function name rather than under the program that ran it, so what is already named reads as already named and does not sit at the top of the list pretending to be a hole.";
  "A count only means something beside the window it was taken over, so the window is asked for rather than assumed - see `claude_bash_commands` for what an unwindowed count gets wrong.";
  arguments_assert(arguments, 1);
  let commands = await claude_bash_commands(days);
  let labels = [];
  for (let command of commands) {
    let named = bash_command_labels(command);
    list_add_multiple(labels, named);
  }
  let tally = list_tally(labels);
  let rows = [];
  for (let label of object_property_names(tally)) {
    let count = tally[label];
    let row = {
      label,
      count,
    };
    list_add(rows, row);
  }
  function by_count(row) {
    let n = row.count;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(rows, by_count);
  return ranked;
}
