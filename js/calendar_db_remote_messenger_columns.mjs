import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_remote_messenger_columns() {
  arguments_assert(arguments, 0);
  ("Adds the Messenger and day-limit columns to the calendar's Cloudflare D1 database, made before they existed: each meeting's via and profile_url, each host's messenger and max_per_day. CREATE TABLE IF NOT EXISTS leaves an existing table as it was, so a new column has to be added by hand once.");
  ("Run once: a second run fails loudly on the column already being there, and changes nothing.");
  let folder = await calendar_worker_stage([]);
  let sql =
    "ALTER TABLE meetings ADD COLUMN via TEXT NOT NULL DEFAULT 'whatsapp' CHECK (via IN ('whatsapp', 'messenger')); ALTER TABLE meetings ADD COLUMN profile_url TEXT; ALTER TABLE hosts ADD COLUMN messenger TEXT NOT NULL DEFAULT ''; ALTER TABLE hosts ADD COLUMN max_per_day INTEGER CHECK (max_per_day IS NULL OR max_per_day BETWEEN 1 AND 24);";
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
