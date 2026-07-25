import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function permission_prompt_events_grouped(events) {
  "Collapses waits onto the label a permission rule would carry, counted and worst-case, commonest first. The count is the interesting number: it is how many times that one missing rule cost the human an interruption.";
  let groups = new Map();
  for (let event of events) {
    let label = event.label;
    let b = groups.has(label);
    if (not(b)) {
      groups.set(label, {
        label,
        count: 0,
        seconds_worst: 0,
        latest: "",
        sample: event.command,
        verdict: "",
      });
    }
    let group = groups.get(label);
    group.count = group.count + 1;
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
    list_add(rows, group);
  }
  function by_count(row) {
    let n = row.count;
    return n;
  }
  list_sort_number_mapper(rows, by_count);
  list_reverse(rows);
  return rows;
}
