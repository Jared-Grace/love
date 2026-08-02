import { multiply } from "./multiply.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function permission_prompt_events_grouped_by(events, key) {
  "Collapses waits onto one field of the event, counted and worst-case, commonest first. The count is the interesting number: it is how many times that one missing rule cost the human an interruption.";
  "Which field to group on is the caller's choice, because the right grouping is whatever the rule can name. A folder is right when one grant covers everything under it, and an exact file is right when the grants are written per file, where folder grouping would hide which sibling is the one still missing.";
  let groups = new Map();
  for (let event of events) {
    let label = property_get(event, key);
    let b = groups.has(label);
    if (not(b)) {
      groups.set(label, {
        label,
        count: 0,
        seconds_total: 0,
        seconds_mean: 0,
        seconds_worst: 0,
        milliseconds_total: 0,
        latest: "",
        sample: event.command,
        verdict: "",
      });
    }
    let group = groups.get(label);
    group.count = group.count + 1;
    ("The whole time a label costs is what says whether it is worth working on - a slow thing run once is an anecdote and a quick thing run four hundred times is a bill. Summed in milliseconds and rounded once at the end so a thousand sub-second calls do not each round away to nothing.");
    group.milliseconds_total = group.milliseconds_total + event.waited;
    let divided = divide(event.waited, 1000);
    let seconds = Math.round(divided);
    if (greater_than(seconds, group.seconds_worst)) {
      group.seconds_worst = seconds;
    }
    if (greater_than(event.at, group.latest)) {
      group.latest = event.at;
    }
  }
  let rows = [];
  for (let group of groups.values()) {
    let total = divide(group.milliseconds_total, 1000);
    group.seconds_total = Math.round(total);
    let mean = divide(group.milliseconds_total, group.count);
    let mean_seconds = divide(mean, 1000);
    let p = multiply(mean_seconds, 10);
    let top = Math.round(p);
    group.seconds_mean = divide(top, 10);
    list_add(rows, group);
  }
  function by_count(row) {
    let n = row.count;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(rows, by_count);
  return ranked;
}
