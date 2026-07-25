import { list_add } from "./list_add.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_asked } from "./permission_prompt_events_asked.mjs";
export async function permission_prompt_report(days) {
  "Which tool calls plausibly made the human stop and approve something, over the last days, ranked by how often.";
  "This is the DEMAND side of the permission system. The allow-rule gates answer which rules are dead; this answers which clicks are real - so a new rule gets written for what actually costs the human time, rather than for whatever seemed likely. A label near the top with a fixed, safe shape is a rule waiting to be written.";
  let events = await permission_prompt_events_recent(days);
  let asked = await permission_prompt_events_asked(events);
  let groups = new Map();
  for (let event of asked) {
    let label = event.label;
    if (!groups.has(label)) {
      groups.set(label, {
        label,
        count: 0,
        seconds_worst: 0,
        sample: event.command,
      });
    }
    let group = groups.get(label);
    group.count = group.count + 1;
    let seconds = Math.round(event.waited / 1000);
    if (seconds > group.seconds_worst) {
      group.seconds_worst = seconds;
    }
  }
  let rows = [];
  for (let group of groups.values()) {
    list_add(rows, group);
  }
  function by_count(row) {
    return row.count;
  }
  list_sort_number_mapper(rows, by_count);
  list_reverse(rows);
  for (let row of rows) {
    console.log(
      String(row.count).padStart(5) +
        "  worst " +
        String(row.seconds_worst).padStart(4) +
        "s  " +
        row.label,
    );
  }
  let summary = {
    days: Number(days),
    waits: events.length,
    suspects: asked.length,
    labels: rows.length,
  };
  return summary;
}
