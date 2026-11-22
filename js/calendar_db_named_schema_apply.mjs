import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { calendar_db_schema } from "./calendar_db_schema.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_named_schema_apply(database_name) {
  arguments_assert(arguments, 1);
  ("Sends the whole calendar schema to one named Cloudflare D1 database - calendar for the live Worker, calendar_test for the test one. Every statement is IF NOT EXISTS, so running it again changes nothing and tables already there keep their rows.");
  ("It adds no column to a table that exists already - CREATE TABLE IF NOT EXISTS leaves such a table as it was; a new column still needs its own ALTER, as the calendar_db_remote_ functions do.");
  let folder = await calendar_worker_stage([]);
  let sql = calendar_db_schema();
  let words = [
    "wrangler",
    "d1",
    "execute",
    database_name,
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
