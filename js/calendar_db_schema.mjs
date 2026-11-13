import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_db_schema() {
  arguments_assert(arguments, 0);
  ("The tables the calendar keeps in its Cloudflare D1 database: who booked, and the meetings they booked.");
  ("★ A TAKEN HOUR IS REFUSED BY THE DATABASE ITSELF, NOT BY A CHECK BEFORE THE WRITE. Two people pressing book on the same hour at the same moment both pass any check made first; a unique index lets exactly one of them in.");
  ("Times are kept as the owner's own date and minute of the day, because the owner's day is what fills up and what the alarms ring on. Each person sees them turned into their own time zone. The minute rather than the hour, so that moving to 30 minute blocks later changes no table.");
  ("A weekly meeting is one row holding its first day; the second index keeps two weekly meetings off the same weekday and minute. A one-time meeting landing on a weekly one's later week is refused where it is written, since an index sees only one row at a time.");
  ("Nothing is deleted: a cancelled meeting keeps its row with the time it was cancelled, and leaves both indexes, so the hour opens again.");
  let sql = `CREATE TABLE IF NOT EXISTS people (
  uid TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  timezone TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS meetings (
  id TEXT PRIMARY KEY,
  uid TEXT NOT NULL REFERENCES people(uid),
  day TEXT NOT NULL,
  weekday INTEGER NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439),
  weekly INTEGER NOT NULL CHECK (weekly IN (0, 1)),
  created_at TEXT NOT NULL,
  cancelled_at TEXT
);
CREATE UNIQUE INDEX IF NOT EXISTS meetings_day_taken
  ON meetings (day, start_minute) WHERE cancelled_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS meetings_weekly_taken
  ON meetings (weekday, start_minute) WHERE cancelled_at IS NULL AND weekly = 1;
CREATE INDEX IF NOT EXISTS meetings_uid ON meetings (uid);
`;
  return sql;
}
