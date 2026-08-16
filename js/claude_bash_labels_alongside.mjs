import { claude_bash_commands_gathered_ranked } from "./claude_bash_commands_gathered_ranked.mjs";
import { bash_command_labelled_is } from "./bash_command_labelled_is.mjs";
import { bash_command_labels } from "./bash_command_labels.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function claude_bash_labels_alongside(days, label, count) {
  "What one named program is run beside, counted and commonest first, over the sessions of the last so many days";
  "A ranking says how often something is reached for. What it cannot say is whose output it was reaching for, and for the programs that only ever trim or reshape what came before them that is the whole question: the same count means the repo has a hole to fill if the thing being trimmed is the repo's own answer, and means nothing at all if it is some other program's printing, which no seam of ours can shorten.";
  "The lines carrying a dispatcher call are counted separately, because that is the one grouping the answer turns on and picking it out of a ranking by eye would mean adding up a few hundred rows that differ only by which function was run.";
  "A line that reaches for this program and nothing else hands back an empty list rather than nothing, so it still counts as a line. That is the whole difference between how often a program is reached for and how much it is reached for beside.";
  arguments_assert(arguments, 3);
  let lines_dispatcher = 0;
  function beside(command) {
    let carried = bash_command_labelled_is(command, label);
    if (not(carried)) {
      return null;
    }
    let labels = bash_command_labels(command);
    let others = [];
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
    return others;
  }
  let gathered = await claude_bash_commands_gathered_ranked(
    days,
    count,
    beside,
  );
  let found = {
    days,
    label,
    lines: gathered.lines,
    lines_dispatcher,
    top: gathered.top,
  };
  return found;
}
