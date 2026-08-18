export async function permission_replay_report() {
  "What could stop prompting today, and what is still stopping the human that no grant answers — read back off the daily record rather than worked out again.";
  "The working out takes a minute and a half of transcript reading and one guard process per shape, and it is the same answer for everyone who asks it that day. So the daemon pays it once and this hands it back for the cost of a file read, which is what makes the question askable at the start of every session rather than once when somebody remembers.";
  "The rows already answered by today's rules are dropped before the ranking is shown. They are the loudest thing in the record and the least worth reading: they stopped happening the moment somebody wrote the rule, and leaving them at the top sends the reader at work that is already done.";
  "When the file is missing the answer is that it is missing, and which command writes it. A reading that made itself up on the spot would be a quarter of an hour spent by a reader who asked for a file read.";
  let path = permission_replay_path();
  let record = await file_read_json_or_null(path);
  let absent = equal(record, null);
  if (absent) {
    let none = {
      path,
      written: false,
      write_with: permission_replay_write.name,
    };
    return none;
  }
  let confirmed = property_get(record, "confirmed");
  let rows = property_get(confirmed, "rows");
  let live = permission_rows_unsolved(rows);
  let shown = list_slice_count(live, 0, 12);
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
    live: list_map(shown, permission_replay_report_row),
  };
  log(permission_replay_report.name, r);
  return r;
}
