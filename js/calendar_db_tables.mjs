import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function calendar_db_tables() {
  arguments_assert(arguments, 0);
  (text_combine_multiple([
    "Every table the calendar database holds, each written once: its name, its columns (one line each, the column's name first) and any rules over several columns. The tables are made from this, and ",
    fn_name("calendar_db_named_migrate"),
    " adds to an existing database whatever column it lacks, so a new field is one line here and one migrate; what each table is for is in ",
  ]),
    fn_name("calendar_db_schema"),
    ".");
  ("A column added later is added to a table that already has rows, so SQLite refuses it unless it may be empty or has a DEFAULT, and refuses PRIMARY KEY and UNIQUE outright; the migrate stops before writing anything if a new line is one of those.");
  let r = [
    {
      name: "people",
      columns: [
        "uid TEXT PRIMARY KEY",
        "name TEXT NOT NULL",
        "whatsapp TEXT NOT NULL",
        "timezone TEXT NOT NULL",
        "created_at TEXT NOT NULL",
      ],
      rules: [],
    },
    {
      name: "hosts",
      columns: [
        "uid TEXT PRIMARY KEY REFERENCES people(uid)",
        "slug TEXT NOT NULL UNIQUE",
        "block_minutes INTEGER NOT NULL CHECK (block_minutes IN (30, 60))",
        "meeting_minutes INTEGER NOT NULL CHECK (meeting_minutes BETWEEN 5 AND 60)",
        "created_at TEXT NOT NULL",
        "messenger TEXT NOT NULL DEFAULT ''",
        "max_per_day INTEGER CHECK (max_per_day IS NULL OR max_per_day BETWEEN 1 AND 24)",
        "max_per_guest INTEGER DEFAULT 2 CHECK (max_per_guest IS NULL OR max_per_guest BETWEEN 1 AND 24)",
        "rules_saved_at TEXT",
      ],
      rules: [],
    },
    {
      name: "openings",
      columns: [
        "host_uid TEXT NOT NULL REFERENCES hosts(uid)",
        "from_day TEXT NOT NULL",
        "weekday INTEGER NOT NULL CHECK (weekday BETWEEN 0 AND 6)",
        "start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439)",
        "end_minute INTEGER NOT NULL CHECK (end_minute BETWEEN 1 AND 1440)",
      ],
      rules: [
        "CHECK (end_minute > start_minute)",
        "PRIMARY KEY (host_uid, from_day, weekday, start_minute)",
      ],
    },
    {
      name: "openings_dated",
      columns: [
        "host_uid TEXT NOT NULL REFERENCES hosts(uid)",
        "day TEXT NOT NULL",
        "start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439)",
        "end_minute INTEGER NOT NULL CHECK (end_minute BETWEEN 1 AND 1440)",
        "open INTEGER NOT NULL CHECK (open IN (0, 1))",
      ],
      rules: [
        "CHECK (end_minute > start_minute)",
        "PRIMARY KEY (host_uid, day, start_minute)",
      ],
    },
    {
      name: "meetings",
      columns: [
        "id TEXT PRIMARY KEY",
        "host_uid TEXT NOT NULL REFERENCES hosts(uid)",
        "guest_uid TEXT NOT NULL REFERENCES people(uid)",
        "host_timezone TEXT NOT NULL",
        "day TEXT NOT NULL",
        "weekday INTEGER NOT NULL CHECK (weekday BETWEEN 0 AND 6)",
        "start_minute INTEGER NOT NULL CHECK (start_minute BETWEEN 0 AND 1439)",
        "weekly INTEGER NOT NULL CHECK (weekly IN (0, 1))",
        "created_at TEXT NOT NULL",
        "cancelled_at TEXT",
        "code TEXT",
        "confirmed_at TEXT",
        "via TEXT NOT NULL DEFAULT 'whatsapp' CHECK (via IN ('whatsapp', 'messenger'))",
        "profile_url TEXT",
      ],
      rules: [],
    },
    {
      name: "sessions",
      columns: [
        "key_hash TEXT PRIMARY KEY",
        "uid TEXT NOT NULL",
        "created_at TEXT NOT NULL",
      ],
      rules: [],
    },
    {
      name: "proofs",
      columns: [
        "host_uid TEXT NOT NULL REFERENCES hosts(uid)",
        "guest_uid TEXT NOT NULL REFERENCES people(uid)",
        "via TEXT NOT NULL CHECK (via IN ('whatsapp', 'messenger'))",
        "whatsapp TEXT NOT NULL",
        "profile_given TEXT",
        "profile_url TEXT",
        "code TEXT NOT NULL",
        "created_at TEXT NOT NULL",
        "confirmed_at TEXT",
      ],
      rules: ["PRIMARY KEY (host_uid, guest_uid)"],
    },
  ];
  return r;
}
