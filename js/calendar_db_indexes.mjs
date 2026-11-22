import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_db_indexes() {
  arguments_assert(arguments, 0);
  ("Every index on the calendar database, each a whole IF NOT EXISTS statement, so sending them again changes nothing. They are made after every column is in place, since an index names columns.");
  let r = [
    "CREATE UNIQUE INDEX IF NOT EXISTS meetings_day_taken\n  ON meetings (host_uid, day, start_minute) WHERE cancelled_at IS NULL",
    "CREATE UNIQUE INDEX IF NOT EXISTS meetings_weekly_taken\n  ON meetings (host_uid, weekday, start_minute) WHERE cancelled_at IS NULL AND weekly = 1",
    "CREATE INDEX IF NOT EXISTS meetings_guest ON meetings (guest_uid)",
    "CREATE INDEX IF NOT EXISTS meetings_code ON meetings (host_uid, code)",
    "CREATE INDEX IF NOT EXISTS sessions_uid ON sessions (uid)",
    "CREATE INDEX IF NOT EXISTS proofs_code ON proofs (host_uid, code)",
  ];
  return r;
}
