import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_named_stage } from "./calendar_db_named_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_named_execute_words(
  database_name,
  flags,
  sql,
) {
  arguments_assert(arguments, 3);
  ("Runs sql on the named calendar database, the remote one on Cloudflare, with flags (a list, empty for none) put before the statement; answers what wrangler printed. The one place a calendar database is reached from this machine.");
  let folder = await calendar_db_named_stage(database_name);
  let words = [
    "wrangler",
    "d1",
    "execute",
    database_name,
    "--remote",
    ...flags,
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
