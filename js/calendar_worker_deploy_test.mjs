import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_worker_deploy_test() {
  arguments_assert(arguments, 0);
  ("Sends the calendar Worker to its workers.dev test address only, with no routes on christarose.org, so the live site is untouched. It uses the real calendar database.");
  let folder = await calendar_worker_stage([]);
  let words = ["wrangler", "deploy"];
  let printed = await npx_run(
    words,
    {
      cwd: folder,
    },
    180000,
  );
  return printed;
}
