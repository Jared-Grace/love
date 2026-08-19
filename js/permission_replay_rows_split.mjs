import { fn_name } from "./fn_name.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_rows_unsolved } from "./permission_rows_unsolved.mjs";
import { permission_rows_alive } from "./permission_rows_alive.mjs";
import { not } from "./not.mjs";
export async function permission_replay_rows_split() {
  "The daily prompt record opened and sorted into its parts, with every row still whole: the two rankings it holds, each cut down to what is neither already answered nor dead.";
  "Two rankings live in this record and they disagree, so both come back and each is named for where it came from. The proved half is what the harness saw actually stop the human, and it is wiped whenever the machine restarts, so it is honest about what happened and blind to most of it. The replayed half is every shape the transcripts show being run, put to the rules as they stood when it was written, so it is an estimate rather than a sighting and it sees the whole week.";
  "The rows come back unshortened because two readers want different things from them - one shows them to a person and needs only four fields, the other puts them back to the guard and needs the whole command. Shortening here would decide for both.";
  ("The reading that shows this is ",
    fn_name("permission_replay_reading"),
    ", and the one that asks the guard about it again before showing it is ",
    fn_name("permission_replay_reading_checked"),
    ".");
  let path = permission_replay_path();
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
  let confirmed = property_get(record, "confirmed");
  let rows = property_get(confirmed, "rows");
  let unsolved = permission_rows_unsolved(rows);
  let split = await permission_rows_alive(unsolved);
  let candidates = property_get(record, "candidates");
  let unsolved_replayed = permission_rows_unsolved(candidates);
  let split_replayed = await permission_rows_alive(unsolved_replayed);
  let r = {
    path,
    written: true,
    days: property_get(record, "days"),
    proved: property_get(confirmed, "counted"),
    proved_grants: property_get(record, "proved_grants"),
    replay_grants: property_get(record, "replay_grants"),
    proved_alive: property_get(split, "alive"),
    proved_dead: property_get(split, "dead"),
    replayed_alive: property_get(split_replayed, "alive"),
    replayed_dead: property_get(split_replayed, "dead"),
  };
  return r;
}
