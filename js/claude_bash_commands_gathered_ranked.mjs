import { claude_bash_commands } from "./claude_bash_commands.mjs";
import { list_tally_ranked_top } from "./list_tally_ranked_top.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function claude_bash_commands_gathered_ranked(
  days,
  count,
  gather,
) {
  "Reads every shell command of the last so many days, gathers whatever is asked of each one, and hands back the commonest of what was gathered together with how many lines had anything to say.";
  "Every reading of the log is this same walk with a different question hung on it - what a program is run beside, what it is pointed at - and the walk is the expensive half: it opens every session's record, and doing that once per question is the whole cost of asking two.";
  "Nothing and an empty answer are told apart, and the difference is the line count. A line the question does not apply to hands back nothing and is not a line; a line the question applies to but which contributes no value hands back an empty list and is counted, because how often a shape occurs at all is a different measurement from how much it carries.";
  arguments_assert(arguments, 3);
  let commands = await claude_bash_commands(days);
  let values = [];
  let lines = 0;
  for (let command of commands) {
    let found = gather(command);
    let silent = equal(found, null);
    if (silent) {
      continue;
    }
    lines = add(lines, 1);
    list_add_multiple(values, found);
  }
  let top = list_tally_ranked_top(values, count);
  let gathered = {
    lines,
    counted: values.length,
    top,
  };
  return gathered;
}
