import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_db_schema() {
  arguments_assert(arguments, 0);
  ("The tables the calendar keeps in its Cloudflare D1 database: the people who sign in, the ones among them who take bookings, the hours each of those is free, and the meetings booked with them.");
  ("★ ANYBODY CAN BE BOOKED, NOT ONLY THE OWNER. A host is a person who has turned bookings on; every meeting names its host, and an hour taken with one host is still open with every other.");
  ("★ A TAKEN HOUR IS REFUSED BY THE DATABASE ITSELF, NOT BY A CHECK BEFORE THE WRITE. Two people pressing book on the same hour at the same moment both pass any check made first; a unique index lets exactly one of them in.");
  ("Times are kept as the host's own date and minute of the day, in the host's time zone written on the meeting, because the host's day is what fills up and what their alarms ring on. Each guest sees them turned into their own time zone. The minute rather than the hour, so that moving to 30 minute blocks later changes no table.");
  ("A weekly meeting is one row holding its first day; the second index keeps two weekly meetings off the same host, weekday and minute. A one-time meeting landing on a weekly one's later week is refused where it is written, since an index sees only one row at a time.");
  ("Nothing is deleted: a cancelled meeting keeps its row with the time it was cancelled, and leaves both indexes, so the hour opens again.");
  let sql = `CREATE TABLE IF NOT EXISTS people (
  uid TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  timezone TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS hosts (
  uid TEXT PRIMARY KEY REFERENCES people(uid),
  slug TEXT NOT NULL UNIQUE,
  block_minutes INTEGER NOT NULL CHECK (block_minutes IN (30, 60)),
  meeting_minutes INTEGER NOT NULL CHECK (meeting_minutes BETWEEN 5 AND 60),
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS openings (
  host_uid TEXT NOT NULL REFERENCES hosts(uid),
  weekday INTEGER NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439),
  end_minute INTEGER NOT NULL CHECK (end_minute BETWEEN 1 AND 1440),
  CHECK (end_minute > start_minute),
  PRIMARY KEY (host_uid, weekday, start_minute)
);
CREATE TABLE IF NOT EXISTS meetings (
  id TEXT PRIMARY KEY,
  host_uid TEXT NOT NULL REFERENCES hosts(uid),
  guest_uid TEXT NOT NULL REFERENCES people(uid),
  host_timezone TEXT NOT NULL,
  day TEXT NOT NULL,
  weekday INTEGER NOT NULL CHECK (weekday BETWEEN 0 AND 6),
  start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439),
  weekly INTEGER NOT NULL CHECK (weekly IN (0, 1)),
  created_at TEXT NOT NULL,
  cancelled_at TEXT
);
CREATE UNIQUE INDEX IF NOT EXISTS meetings_day_taken
  ON meetings (host_uid, day, start_minute) WHERE cancelled_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS meetings_weekly_taken
  ON meetings (host_uid, weekday, start_minute) WHERE cancelled_at IS NULL AND weekly = 1;
CREATE INDEX IF NOT EXISTS meetings_guest ON meetings (guest_uid);
`;
  return sql;
}
