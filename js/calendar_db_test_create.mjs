import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_test_create() {
  arguments_assert(arguments, 0);
  ("Makes, once, the Cloudflare D1 database the calendar's test Worker will use, so that working on the dev page leaves the live calendar's people and meetings untouched.");
  ('WHY IT EXISTS (human, 2026-11-22: "want to test locally first - need to be able to keep prod unchanged while developing"). Until now the test Worker and the live one shared the one database, so a guest or booking made on the dev page was a real one.');
  ("It prints the new database's id; that id then goes into the test Worker's settings. Run twice, Cloudflare refuses the second, because the name is taken - nothing is lost.");
  let folder = await calendar_worker_stage([]);
  let words = ["wrangler", "d1", "create", "calendar_test"];
  let printed = await npx_run(
    words,
    {
      cwd: folder,
    },
    180000,
  );
  return printed;
}
