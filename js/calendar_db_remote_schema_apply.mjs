import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { calendar_db_schema } from "./calendar_db_schema.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_remote_schema_apply() {
  arguments_assert(arguments, 0);
  ("Sends the whole calendar schema to the Cloudflare D1 database, so a table added to it since (proofs, 2026-11-20) is made there too. Every statement is IF NOT EXISTS, so running it again changes nothing and tables already there keep their rows.");
  ("It adds no column to a table that exists already - CREATE TABLE IF NOT EXISTS leaves such a table as it was; a new column still needs its own ALTER, as the calendar_db_remote_ functions beside this one do.");
  let folder = await calendar_worker_stage([]);
  let sql = calendar_db_schema();
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
