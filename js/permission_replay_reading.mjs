import { permission_replay_rows_split } from "./permission_replay_rows_split.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { permission_grants_grouped_open_names } from "./permission_grants_grouped_open_names.mjs";
import { list_map } from "./list_map.mjs";
import { permission_replay_report_row } from "./permission_replay_report_row.mjs";
import { not } from "./not.mjs";
export async function permission_replay_reading() {
  "What could stop prompting today, and what is still stopping the human that no grant answers — read back off the daily record rather than worked out again, and handed over rather than printed.";
  "The printing is somebody else's decision. This same answer is wanted whole by a reader at a keyboard and one line long by a thing that speaks at the start of a session, so the reading says nothing itself and both spellings ask it.";
  "The rows already answered by today's rules are dropped before the ranking is shown. They are the loudest thing in the record and the least worth reading: they stopped happening the moment somebody wrote the rule, and leaving them at the top sends the reader at work that is already done.";
  "When the file is missing the answer is that it is missing, and which command writes it. A reading that made itself up on the spot would be a quarter of an hour spent by a reader who asked for a file read.";
  ("A verdict here is as old as the record and the rules move faster than that, so a row shown as still standing may have been granted since. ",
    fn_name("permission_replay_reading_checked"),
    " is the same reading with every row put back to the guard first, at the cost of a process each - asked by somebody who came to act on it, where this one is asked at the start of every session.");
  let split = await permission_replay_rows_split();
  let written = property_get(split, "written");
  let missing = not(written);
  if (missing) {
    return split;
  }
  let live = property_get(split, "proved_alive");
  let shown = list_slice_count(live, 0, 12);
  let replayed = property_get(split, "replayed_alive");
  let shown_replayed = list_slice_count(replayed, 0, 12);
  let dead = property_get(split, "proved_dead");
  let dead_replayed = property_get(split, "replayed_dead");
  let proved_grants = property_get(split, "proved_grants");
  let replay_grants = property_get(split, "replay_grants");
  let r = {
    path: property_get(split, "path"),
    written: true,
    days: property_get(split, "days"),
    proved: property_get(split, "proved"),
    proved_live: live.length,
    grantable: permission_grants_grouped_open_names(proved_grants),
    grantable_replay: permission_grants_grouped_open_names(replay_grants),
    replayed_live: replayed.length,
    dead: dead.length,
    dead_replayed: dead_replayed.length,
    replayed: list_map(shown_replayed, permission_replay_report_row),
    proved_rows: list_map(shown, permission_replay_report_row),
  };
  return r;
}
