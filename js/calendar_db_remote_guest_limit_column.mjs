import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_remote_guest_limit_column() {
  arguments_assert(arguments, 0);
  ("Adds each host's max_per_guest column to the calendar's Cloudflare D1 database, made before it existed. CREATE TABLE IF NOT EXISTS leaves an existing table as it was, so a new column has to be added by hand once. Existing hosts get 2, the limit every host had before it could be set.");
  ("Run once: a second run fails loudly on the column already being there, and changes nothing.");
  let folder = await calendar_worker_stage([]);
  let sql =
    "ALTER TABLE hosts ADD COLUMN max_per_guest INTEGER DEFAULT 2 CHECK (max_per_guest IS NULL OR max_per_guest BETWEEN 1 AND 24);";
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
