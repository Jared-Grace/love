import { arguments_assert } from "./arguments_assert.mjs";
import { claude_bash_commands } from "./claude_bash_commands.mjs";
import { bash_command_labelled_is } from "./bash_command_labelled_is.mjs";
import { bash_command_labels } from "./bash_command_labels.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function claude_bash_labels_alongside(days, label, count) {
  "What one named program is run beside, counted and commonest first, over the sessions of the last so many days";
  "A ranking says how often something is reached for. What it cannot say is whose output it was reaching for, and for the programs that only ever trim or reshape what came before them that is the whole question: the same count means the repo has a hole to fill if the thing being trimmed is the repo's own answer, and means nothing at all if it is some other program's printing, which no seam of ours can shorten.";
  "The lines carrying a dispatcher call are counted separately, because that is the one grouping the answer turns on and picking it out of a ranking by eye would mean adding up a few hundred rows that differ only by which function was run.";
  arguments_assert(arguments, 3);
  let commands = await claude_bash_commands(days);
  let others = [];
  let lines = 0;
  let lines_dispatcher = 0;
  for (let command of commands) {
    let carried = bash_command_labelled_is(command, label);
    if (not(carried)) {
      continue;
    }
    lines = add(lines, 1);
    let labels = bash_command_labels(command);
    let dispatched = false;
    for (let one of labels) {
      let same = equal(one, label);
      if (same) {
        continue;
      }
      list_add(others, one);
      let named = one.startsWith("node scripts/");
      if (named) {
        dispatched = true;
      }
    }
    if (dispatched) {
      lines_dispatcher = add(lines_dispatcher, 1);
    }
  }
  let ranked = list_tally_ranked(others);
  let many = Number(count);
  let top = list_take(ranked, many);
  let found = {
    days,
    label,
    lines,
    lines_dispatcher,
    top,
  };
  return found;
}
