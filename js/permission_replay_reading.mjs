import { permission_rows_alive } from "./permission_rows_alive.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_rows_unsolved } from "./permission_rows_unsolved.mjs";
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
  let path = permission_replay_path();
  ("asked whether the record is there before it is read, because a missing one is the ordinary state on a machine the daemon has not run on yet and a thrown error would read as something being broken");
  let there = await file_exists(path);
  let absent = not(there);
  if (absent) {
    let none = {
      path,
      written: false,
      write_with: fn_name("permission_replay_write"),
    };
    return none;
  }
  let record = await file_read_json(path);
  ("Two rankings live in this record and they disagree, so both are handed back and each is named for where it came from. The proved half is what the harness saw actually stop the human, and it is wiped whenever the machine restarts, so it is honest about what happened and blind to most of it. The replayed half is every shape the transcripts show being run, put to today's rules, so it is an estimate rather than a sighting and it sees the whole week.");
  ("Handing back only the proved half was measured costing a whole turn on 2026-08-19: its top row was cd at fifty four, which today's rules already allow and no rule could ever have covered, while the replayed half had git show at a hundred and twenty standing untouched. A reader who cannot see the second ranking cannot know the first one is the smaller half.");
  ("A shape naming a folder that has gone is dropped from both rankings and counted separately. It cannot interrupt anybody again, so ranking it as work says the opposite of what it is - and the count is kept because a row that vanished between two readings is exactly the row somebody goes looking for.");
  let confirmed = property_get(record, "confirmed");
  let rows = property_get(confirmed, "rows");
  let unsolved = permission_rows_unsolved(rows);
  let split = await permission_rows_alive(unsolved);
  let live = property_get(split, "alive");
  let shown = list_slice_count(live, 0, 12);
  let candidates = property_get(record, "candidates");
  let unsolved_replayed = permission_rows_unsolved(candidates);
  let split_replayed = await permission_rows_alive(unsolved_replayed);
  let replayed = property_get(split_replayed, "alive");
  let shown_replayed = list_slice_count(replayed, 0, 12);
  let dead = property_get(split, "dead");
  let dead_replayed = property_get(split_replayed, "dead");
  let proved_grants = property_get(record, "proved_grants");
  let replay_grants = property_get(record, "replay_grants");
  let r = {
    path,
    written: true,
    days: property_get(record, "days"),
    proved: property_get(confirmed, "counted"),
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
