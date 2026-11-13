import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_remote_confirm_columns() {
  arguments_assert(arguments, 0);
  ("Adds the code and confirmed_at columns, and their index, to the calendar's Cloudflare D1 database, which was made before bookings waited for a code; CREATE TABLE IF NOT EXISTS leaves an existing table as it was, so a new column has to be added by hand once.");
  ("Run once: a second run fails loudly on the column already being there, and changes nothing.");
  let folder = await calendar_worker_stage([]);
  let sql =
    "ALTER TABLE meetings ADD COLUMN code TEXT; ALTER TABLE meetings ADD COLUMN confirmed_at TEXT; CREATE INDEX IF NOT EXISTS meetings_code ON meetings (host_uid, code);";
  let words = [
    "wrangler",
    "d1",
    "execute",
    "calendar",
    "--remote",
    "--command",
    sql,
  ];
  let printed = await npx_run(
    words,
    {
      cwd: folder,
    },
    180000,
  );
  return printed;
}
