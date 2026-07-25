import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function permission_prompt_confirmed_commands_report(
  days,
  seconds_minimum,
) {
  "The exact shell commands whose approval was PROVED to cost the human, ranked by how often. The other proved reports name the shape a rule would carry, and for the shell that shape is the leading verb - which lies about a sequence: a chain beginning with an allowed cd is filed under cd even though what stopped it was a verb further along, and no grant written for cd can fix that.";
  "Each row is put to the guard as it stands today, so the verdict separates a cost already paid off from one still being paid: a row reading allow was covered by some later grant and only its history is left, and a row reading ask is the live one.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  function shell_is(event) {
    let bash = equal(event.tool, "Bash");
    let empty = text_empty_is(event.command);
    let known = not(empty);
    let b = bash && known;
    return b;
  }
  let shell = list_filter(confirmed, shell_is);
  let rows = permission_prompt_events_grouped_by(shell, "command");
  let keep = 15;
  let shown = rows.slice(0, keep);
  await permission_prompt_rows_verdicts(shown);
  permission_prompt_rows_print(
    "proved interruptions, by exact command",
    rows,
    keep,
  );
  let summary = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    proved: confirmed.length,
    shell: shell.length,
    commands: rows.length,
  };
  return summary;
}
