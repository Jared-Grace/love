import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { claude_bash_labels_ranked } from "./claude_bash_labels_ranked.mjs";
import { list_filter } from "./list_filter.mjs";
import { add } from "./add.mjs";
import { list_take } from "./list_take.mjs";
export async function claude_bash_labels_report(days, count) {
  "What the sessions of the last so many days have reached for at the shell, split into what the repo already answers to and what it does not, with the commonest unnamed ones first";
  "The split is the reading. A dispatcher call is work that has already been taken out of the shell, so leaving it in the ranking would put the repo's own successes at the top of a list of its holes. What is left after taking those away is the honest measure of how much of this is still done by hand, and the top of that list is where the next command should be.";
  "The window is given back with the numbers, because a count read away from the span it covers is the one mistake this reading is most likely to lead somebody into - see `claude_bash_commands`.";
  arguments_assert(arguments, 2);
  let many = Number(count);
  let ranked = await claude_bash_labels_ranked(days);
  function named_is(row) {
    let b = row.label.startsWith("node scripts/");
    return b;
  }
  function unnamed_is(row) {
    let b = named_is(row);
    let n = not(b);
    return n;
  }
  let named = list_filter(ranked, named_is);
  let unnamed = list_filter(ranked, unnamed_is);
  let calls = 0;
  for (let row of ranked) {
    calls = add(calls, row.count);
  }
  let calls_named = 0;
  for (let row of named) {
    calls_named = add(calls_named, row.count);
  }
  let calls_unnamed = 0;
  for (let row of unnamed) {
    calls_unnamed = add(calls_unnamed, row.count);
  }
  let top = list_take(unnamed, many);
  let report = {
    days,
    calls,
    calls_named,
    calls_unnamed,
    labels: ranked.length,
    labels_named: named.length,
    labels_unnamed: unnamed.length,
    top,
  };
  return report;
}
